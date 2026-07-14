
    "use strict";
    const ROUTER_VERSION = "atlas-router-v2.0.0";
    const PARSER_VERSION = "parser-v2.0.0";
    const POLICY_VERSION = "policy-v2.0.0";
    const SCORING_VERSION = "scoring-v2.0.0";
    const REGISTRY_VERSION = "registry-v2.0.0-browser-demo";
    const CONFIDENCE_ABSTAIN_THRESHOLD = 0.20;
    const CONFIDENCE_ESCALATE_THRESHOLD = 0.30;
    const CONFIDENCE_HIGH_THRESHOLD = 0.45;
    const SUPPORTED_FORMATS = ["text", "image", "pdf", "audio", "video", "spreadsheet", "presentation"];
    const EXTENSION_FORMAT_MAP = {
      ".pdf": "pdf",
      ".png": "image", ".jpg": "image", ".jpeg": "image", ".gif": "image", ".bmp": "image", ".tiff": "image", ".webp": "image",
      ".mp3": "audio", ".wav": "audio", ".m4a": "audio", ".flac": "audio", ".ogg": "audio", ".aac": "audio",
      ".mp4": "video", ".mov": "video", ".mkv": "video", ".avi": "video", ".webm": "video",
      ".xlsx": "spreadsheet", ".xls": "spreadsheet", ".csv": "spreadsheet",
      ".pptx": "presentation", ".ppt": "presentation",
      ".txt": "text", ".md": "text"
    };
    const TASK_FAMILY_SIGNAL_MAP = {
      coding: {
        "perf:coding": 0.50, "perf:agentic_tasks": 0.15, "bench:swe_bench": 0.15,
        "bench:humaneval": 0.10, "perf:instruction_following": 0.10
      },
      reasoning: {
        "perf:reasoning": 0.42, "perf:scientific_reasoning": 0.18,
        "bench:gpqa": 0.20, "bench:mmlu": 0.10, "perf:instruction_following": 0.10
      },
      mathematics: {
        "perf:mathematics": 0.50, "bench:aime": 0.25,
        "perf:reasoning": 0.15, "bench:gpqa": 0.10
      },
      chat: {
        "perf:creative_writing": 0.20, "perf:instruction_following": 0.40,
        "domain:general": 0.20, "domain:customer_support": 0.20
      },
      vision: {
        "perf:vision_understanding": 0.50, "bench:mmmu": 0.25,
        "perf:ocr": 0.10, "perf:table_understanding": 0.15
      },
      ocr: {
        "perf:ocr": 0.55, "bench:docvqa": 0.20,
        "perf:table_understanding": 0.15, "perf:document_qa": 0.10
      },
      document_qa: {
        "perf:document_qa": 0.40, "perf:long_context": 0.20,
        "bench:docvqa": 0.15, "perf:summarization": 0.10, "perf:table_understanding": 0.15
      },
      summarization: {
        "perf:summarization": 0.50, "perf:long_context": 0.20,
        "perf:instruction_following": 0.20, "perf:document_qa": 0.10
      },
      translation: {
        "perf:translation": 0.70, "perf:instruction_following": 0.30
      },
      agent: {
        "perf:agentic_tasks": 0.45, "perf:instruction_following": 0.20,
        "perf:reasoning": 0.20, "perf:coding": 0.15
      },
      audio: {
        "perf:audio_understanding": 0.60, "perf:summarization": 0.20,
        "perf:instruction_following": 0.20
      }
    };
    const DOMAIN_SAFETY_MAP = {
      medical: "medical", legal: "legal", finance: "finance", security: "cybersecurity",
      general: "general", software: "general", science: "general", research: "general",
      education: "general", mathematics: "general", customer_support: "general"
    };
    const DOMAIN_EXPERTISE_MAP = {
      medical: "medical", legal: "legal", finance: "finance", security: "software",
      software: "software", science: "science", research: "research", education: "education",
      general: "general", mathematics: "mathematics", customer_support: "customer_support"
    };
    const TOPIC_KEYWORDS = {
      legal_contract: ["agreement", "obligations", "liability", "indemnif", "nda", "confidential", "party of the", "hereinafter", "clause"],
      financial_document: ["invoice", "balance sheet", "revenue", "ebitda", "statement", "tax", "amount due", "fiscal"],
      medical_record: ["patient", "diagnosis", "treatment", "prescription", "symptom", "clinical"],
      research_paper: ["abstract", "we propose", "related work", "experiment", "benchmark", "et al", "references"],
      security_report: ["vulnerability", "cve", "exploit", "payload", "attack surface"],
      support_record: ["ticket", "customer", "refund", "complaint", "resolution"]
    };
    const PROMPT_MODALITY_HINTS = {
      image: ["this image", "this picture", "this photo", "the photo"],
      pdf: ["this pdf", "this document", "the document", "this contract"],
      audio: ["this recording", "this audio", "this call", "the meeting recording"],
      video: ["this video", "this clip", "the footage"],
      spreadsheet: ["this spreadsheet", "this excel", "this workbook"],
      presentation: ["this slide deck", "this presentation", "these slides"]
    };
        const WEIGHT_PROFILES = {
      quality_first: { quality: 0.44, uncertainty: 0.16, cost: 0.03, latency: 0.05, reliability: 0.16, riskfit: 0.1, runtime: 0.06 },
      complex_reasoning: { quality: 0.42, uncertainty: 0.16, cost: 0.02, latency: 0.04, reliability: 0.16, riskfit: 0.14, runtime: 0.06 },
      high_risk: { quality: 0.36, uncertainty: 0.18, cost: 0.01, latency: 0.03, reliability: 0.2, riskfit: 0.18, runtime: 0.04 },
      contract_review_intake: { quality: 0.38, uncertainty: 0.16, cost: 0.02, latency: 0.03, reliability: 0.18, riskfit: 0.18, runtime: 0.05 },
      research_drafting: { quality: 0.38, uncertainty: 0.14, cost: 0.05, latency: 0.05, reliability: 0.16, riskfit: 0.12, runtime: 0.1 },
      coding_assistant: { quality: 0.36, uncertainty: 0.14, cost: 0.08, latency: 0.08, reliability: 0.16, riskfit: 0.08, runtime: 0.1 },
      balanced: { quality: 0.32, uncertainty: 0.12, cost: 0.12, latency: 0.12, reliability: 0.14, riskfit: 0.1, runtime: 0.08 },
      generic_balanced: { quality: 0.32, uncertainty: 0.12, cost: 0.12, latency: 0.12, reliability: 0.14, riskfit: 0.1, runtime: 0.08 },
      invoice_ocr_pipeline: { quality: 0.32, uncertainty: 0.14, cost: 0.08, latency: 0.08, reliability: 0.14, riskfit: 0.12, runtime: 0.12 },
      audio_summary: { quality: 0.28, uncertainty: 0.12, cost: 0.1, latency: 0.18, reliability: 0.14, riskfit: 0.08, runtime: 0.1 },
      multilingual_chat: { quality: 0.26, uncertainty: 0.1, cost: 0.12, latency: 0.2, reliability: 0.14, riskfit: 0.08, runtime: 0.1 },
      real_time_voice_agent: { quality: 0.18, uncertainty: 0.08, cost: 0.08, latency: 0.32, reliability: 0.14, riskfit: 0.06, runtime: 0.14 },
      customer_support_summarization: { quality: 0.24, uncertainty: 0.1, cost: 0.24, latency: 0.16, reliability: 0.12, riskfit: 0.06, runtime: 0.08 },
      budget_first: { quality: 0.22, uncertainty: 0.1, cost: 0.32, latency: 0.12, reliability: 0.1, riskfit: 0.06, runtime: 0.08 },
      latency_first: { quality: 0.18, uncertainty: 0.08, cost: 0.08, latency: 0.36, reliability: 0.12, riskfit: 0.06, runtime: 0.12 },
    };
    class RNG {
      constructor(seed = 42) {
        this.state = seed >>> 0;
      }
      imul(a, b) {
        return Math.imul(a >>> 0, b >>> 0) >>> 0;
      }
      nextFloat() {
        this.state = (this.state + 0x6D2B79F5) >>> 0;
        let t = this.state;
        t = this.imul(t ^ (t >>> 15), t | 1);
        t ^= (t + this.imul(t ^ (t >>> 7), t | 61)) >>> 0;
        t >>>= 0;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296.0;
      }
      normal() {
        const u1 = Math.max(this.nextFloat(), 1e-12);
        const u2 = this.nextFloat();
        return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      }
      gamma(k) {
        if (k <= 0) throw new Error("Gamma shape must be > 0.");
        if (k < 1.0) {
          const u = Math.max(this.nextFloat(), 1e-12);
          return this.gamma(k + 1.0) * Math.pow(u, 1.0 / k);
        }
        const d = k - 1.0 / 3.0;
        const c = 1.0 / Math.sqrt(9.0 * d);
        while (true) {
          const x = this.normal();
          const v = Math.pow(1.0 + c * x, 3);
          if (v <= 0) continue;
          const u = this.nextFloat();
          if (u < 1.0 - 0.0331 * Math.pow(x, 4)) return d * v;
          if (Math.log(Math.max(u, 1e-12)) < 0.5 * x * x + d * (1.0 - v + Math.log(v))) return d * v;
        }
      }
      beta(alpha, betaParam) {
        if (alpha <= 0 || betaParam <= 0) throw new Error("Beta parameters must be > 0.");
        const x = this.gamma(alpha);
        const y = this.gamma(betaParam);
        if (x + y === 0) return 0.5;
        return x / (x + y);
      }
    }
    const GLOBAL_RNG = new RNG(42);
    let uploadedFiles = [];
    let lastDecision = null;
    function clamp(x, lo = 0, hi = 1) {
      return Math.min(Math.max(x, lo), hi);
    }
    function mean(values) {
      if (!values.length) return 0;
      return values.reduce((a, b) => a + b, 0) / values.length;
    }
    function deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    function uuidLike() {
      if (crypto && crypto.randomUUID) return crypto.randomUUID();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    async function sha256Short(text, len = 24) {
      const data = new TextEncoder().encode(text);
      const digest = await crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("").slice(0, len);
    }
    function nowIso() {
      return new Date().toISOString();
    }
    function titleCaseSnake(s) {
      return String(s || "").replaceAll("_", " ").replace(/\b\w/g, c => c.toUpperCase());
    }
    function isSimpleConversationalPrompt(prompt) {
      const normalized = String(prompt || "").trim().toLowerCase().replace(/[^\w\s]/g, "");
      const words = normalized.split(/\s+/).filter(Boolean);
      const simplePhrases = new Set([
        "hi", "hello", "hey", "yo", "how are you", "hi how are you",
        "hello how are you", "hey how are you", "good morning", "good afternoon",
        "good evening", "thanks", "thank you"
      ]);
      return words.length <= 6 && (simplePhrases.has(normalized) || /^(hi|hello|hey)\b/.test(normalized));
    }
    function detectFormatFromName(name, type = "") {
      const dot = name.lastIndexOf(".");
      const ext = dot >= 0 ? name.slice(dot).toLowerCase() : "";
      if (EXTENSION_FORMAT_MAP[ext]) return EXTENSION_FORMAT_MAP[ext];
      if (type.startsWith("image/")) return "image";
      if (type.startsWith("audio/")) return "audio";
      if (type.startsWith("video/")) return "video";
      if (type === "application/pdf") return "pdf";
      if (type.includes("spreadsheet") || type === "text/csv") return "spreadsheet";
      if (type.includes("presentation")) return "presentation";
      if (type.startsWith("text/")) return "text";
      return "text";
    }
    async function readTextPreview(file, maxChars = 8000) {
      const fmt = detectFormatFromName(file.name, file.type);
      if (!["text", "spreadsheet", "presentation"].includes(fmt)) return null;
      const dot = file.name.lastIndexOf(".");
      const ext = dot >= 0 ? file.name.slice(dot).toLowerCase() : "";
      if (fmt === "spreadsheet" && ext !== ".csv") return null;
      if (fmt === "presentation") return null;
      try {
        const text = await file.slice(0, maxChars).text();
        return text.split(/\s+/).slice(0, 500).join(" ") || null;
      } catch {
        return null;
      }
    }
    function inferTopic(preview) {
      if (!preview) return null;
      const low = preview.toLowerCase();
      let bestTopic = null;
      let bestScore = 0;
      for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
        const score = keywords.reduce((acc, kw) => acc + (low.includes(kw) ? 1 : 0), 0);
        if (score > bestScore) {
          bestTopic = topic;
          bestScore = score;
        }
      }
      return bestScore >= 2 ? bestTopic : null;
    }
    async function inspectUploadedFiles(files) {
      const profiles = [];
      for (const file of files) {
        const fmt = detectFormatFromName(file.name, file.type);
        const profile = {
          format: fmt,
          page_count: null,
          text_density: null,
          scan_likelihood: null,
          handwriting_likelihood: null,
          table_density: null,
          chart_density: null,
          detected_language: "en",
          audio_duration_sec: null,
          audio_quality: null,
          video_duration_sec: null,
          spreadsheet_complexity: null,
          presentation_complexity: null,
          source_path: file.name,
          file_size_bytes: file.size,
          extracted_text_preview: null,
          inferred_topic: null,
          extraction_method: "browser_heuristic"
        };
        
        let parsedPreview = null;
        
        if (fmt === "pdf") {
          if (typeof pdfjsLib !== 'undefined') {
            try {
              const arrayBuffer = await file.arrayBuffer();
              const pdf = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
              profile.page_count = pdf.numPages;
              profile.extraction_method = "pdf.js";
              if (pdf.numPages > 0) {
                const page = await pdf.getPage(1);
                const content = await page.getTextContent();
                const text = content.items.map(item => item.str).join(' ');
                parsedPreview = text.slice(0, 500);
                profile.scan_likelihood = text.trim().length === 0 ? 1.0 : 0.1;
                profile.text_density = text.trim().length > 0 ? 0.8 : 0.1;
              }
            } catch (e) { console.error("PDF.js error", e); }
          }
          if (!profile.page_count) {
            profile.page_count = Math.max(1, Math.round(file.size / 55000));
            profile.scan_likelihood = file.name.toLowerCase().includes("scan") ? 0.85 : 0.18;
          }
        } else if (fmt === "image") {
          if (typeof Tesseract !== 'undefined') {
            try {
              const url = URL.createObjectURL(file);
              const result = await Tesseract.recognize(url, 'eng');
              profile.extraction_method = "tesseract.js";
              parsedPreview = result.data.text.slice(0, 500);
              URL.revokeObjectURL(url);
              profile.scan_likelihood = 1.0;
            } catch (e) { console.error("Tesseract error", e); }
          }
          if (!parsedPreview) {
            profile.scan_likelihood = /scan|receipt|invoice|doc|document/i.test(file.name) ? 0.75 : 0.20;
          }
        } else if (fmt === "audio" || fmt === "video") {
          try {
            const url = URL.createObjectURL(file);
            const media = document.createElement(fmt);
            media.src = url;
            await new Promise((resolve) => {
              media.onloadedmetadata = () => {
                if (fmt === "audio") profile.audio_duration_sec = media.duration;
                if (fmt === "video") profile.video_duration_sec = media.duration;
                resolve();
              };
              media.onerror = () => resolve();
            });
            URL.revokeObjectURL(url);
            profile.extraction_method = "html5_media";
          } catch (e) { console.error("Media error", e); }
        } else if (fmt === "spreadsheet") {
          if (typeof XLSX !== 'undefined') {
            try {
              const arrayBuffer = await file.arrayBuffer();
              const workbook = XLSX.read(arrayBuffer, {type: 'array'});
              const firstSheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[firstSheetName];
              const json = XLSX.utils.sheet_to_json(worksheet, {header: 1});
              profile.table_density = 0.95;
              profile.spreadsheet_complexity = Math.min(1.0, json.length / 1000);
              profile.extraction_method = "sheetjs";
              parsedPreview = json.slice(0, 10).map(row => row.join(', ')).join('\\n').slice(0, 500);
            } catch (e) { console.error("SheetJS error", e); }
          }
          if (!profile.extraction_method.includes("sheetjs")) {
            profile.spreadsheet_complexity = file.size > 1000000 ? 0.85 : 0.45;
            profile.table_density = 0.90;
          }
        } else if (fmt === "text" || file.name.toLowerCase().endsWith(".docx")) {
          if (file.name.toLowerCase().endsWith(".docx") && typeof mammoth !== 'undefined') {
            try {
              const arrayBuffer = await file.arrayBuffer();
              const result = await mammoth.extractRawText({arrayBuffer: arrayBuffer});
              profile.extraction_method = "mammoth.js";
              parsedPreview = result.value.slice(0, 500);
            } catch (e) { console.error("Mammoth error", e); }
          }
        }
        
        if (!parsedPreview) {
          parsedPreview = await readTextPreview(file);
        }
        
        profile.extracted_text_preview = parsedPreview;
        profile.inferred_topic = inferTopic(parsedPreview);
        profiles.push(profile);
      }
      return profiles;
    }
    function inspectLegacyArtifacts(inputFormats, prompt) {
      const profiles = [];
      const p = prompt.toLowerCase();
      for (const fmt of Array.from(new Set(inputFormats)).sort()) {
        const profile = {
          format: fmt,
          page_count: null,
          text_density: null,
          scan_likelihood: null,
          handwriting_likelihood: null,
          table_density: null,
          chart_density: null,
          detected_language: "en",
          audio_duration_sec: null,
          audio_quality: null,
          video_duration_sec: null,
          spreadsheet_complexity: null,
          presentation_complexity: null,
          source_path: null,
          file_size_bytes: null,
          extracted_text_preview: null,
          inferred_topic: null,
          extraction_method: "heuristic"
        };
        if (fmt === "pdf") {
          profile.page_count = p.includes("contract") ? 30 : 10;
          profile.text_density = ["scanned", "scan", "invoice"].some(k => p.includes(k)) ? 0.25 : 0.80;
          profile.scan_likelihood = ["scanned", "scan", "invoice"].some(k => p.includes(k)) ? 0.85 : 0.10;
          profile.handwriting_likelihood = p.includes("handwritten") ? 0.50 : 0.05;
          profile.table_density = ["invoice", "statement", "table"].some(k => p.includes(k)) ? 0.70 : 0.10;
          profile.chart_density = ["chart", "graph"].some(k => p.includes(k)) ? 0.55 : 0.10;
        } else if (fmt === "image") {
          profile.scan_likelihood = ["extract text", "scan", "ocr"].some(k => p.includes(k)) ? 0.80 : 0.10;
          profile.handwriting_likelihood = p.includes("handwritten") ? 0.60 : 0.10;
          profile.table_density = ["invoice", "receipt", "table"].some(k => p.includes(k)) ? 0.65 : 0.10;
          profile.chart_density = p.includes("chart") ? 0.50 : 0.05;
        } else if (fmt === "audio") {
          profile.audio_duration_sec = ["call", "meeting"].some(k => p.includes(k)) ? 900 : 120;
          profile.audio_quality = 0.75;
        } else if (fmt === "video") {
          profile.video_duration_sec = 600;
          profile.audio_quality = 0.70;
          profile.chart_density = 0.20;
        } else if (fmt === "spreadsheet") {
          profile.spreadsheet_complexity = ["model", "forecast", "multi-she"].some(k => p.includes(k)) ? 0.75 : 0.40;
          profile.table_density = 0.90;
        } else if (fmt === "presentation") {
          profile.presentation_complexity = 0.50;
          profile.chart_density = 0.55;
        }
        profiles.push(profile);
      }
      return profiles;
    }
    function detectConflicts(prompt, profiles) {
      const flags = [];
      const p = prompt.toLowerCase();
      const presentFormats = new Set(profiles.map(a => a.format));
      for (const [modality, phrases] of Object.entries(PROMPT_MODALITY_HINTS)) {
        if (phrases.some(phrase => p.includes(phrase)) && !presentFormats.has(modality)) {
          const uploaded = Array.from(presentFormats).sort();
          flags.push(`prompt_implies_${modality}_but_uploaded_${uploaded.length ? uploaded.join("/") : "none"}`);
        }
      }
      return flags;
    }
    function deterministicExtract(prompt, inputFormats, estimatedTokens) {
      const p = prompt.toLowerCase();
      const requiredFormats = Array.from(new Set([...inputFormats, "text"])).sort();
      return {
        required_formats: requiredFormats,
        requires_json: ["return json", "respond in json", "json output", "json schema", "structured json"].some(k => p.includes(k)),
        requires_function_calling: ["tool", "function call", "call a tool", "api call", "use tools"].some(k => p.includes(k)),
        requires_web_search: ["latest", "today", "current", "search the web", "news", "real-time"].some(k => p.includes(k)),
        requires_ocr: inputFormats.some(fmt => ["pdf", "image"].includes(fmt)) && ["scan", "extract text", "read the document", "ocr", "handwritten", "digitize"].some(k => p.includes(k)),
        requires_citations: ["cite", "citations", "sources", "references", "bibliography"].some(k => p.includes(k)),
        requires_verifier: ["verify", "double-check", "validator", "review", "compliance", "audit"].some(k => p.includes(k)),
        min_context_window: estimatedTokens
      };
    }
    function fallbackStructuredSemanticParse(prompt, inputFormats, estimatedTokens, artifacts) {
      const p = (prompt || "").toLowerCase();
      
      const intentSignals = {
        audio: [["summarize", 0.5], ["chat", 0.5]],
        ocr: [["extract text", 1.0], ["ocr", 1.0], ["scan", 0.8], ["handwritten", 1.0]],
        document_qa: [["summarize", 0.8], ["contract", 1.0], ["document", 0.6], ["obligations", 0.8], ["clause", 1.0], ["review", 0.7], ["tabulate", 0.8]],
        coding: [["python", 1.0], ["bug", 0.8], ["debug", 1.0], ["algorithm", 0.8], ["implement", 0.7], ["code", 1.0], ["sql", 1.0], ["function", 0.6], ["class", 0.5], ["website", 0.8], ["html", 1.0], ["css", 1.0], ["javascript", 1.0], ["react", 1.0], ["frontend", 0.8], ["backend", 0.8], ["script", 0.7], ["ui/ux", 1.0], ["app", 0.5]],
        agent: [["automate", 1.0], ["scrape", 1.0], ["bot", 1.0], ["agent", 1.0], ["orchestrate", 1.0], ["multi-step plan", 1.0], ["workflow", 0.8], ["autonomous", 1.0]],
        mathematics: [["prove", 0.8], ["integral", 1.0], ["equation", 1.0], ["theorem", 1.0], ["calculate", 0.6], ["derivative", 1.0], ["math", 1.0]],
        translation: [["translate", 1.0], ["spanish", 0.8], ["french", 0.8], ["language", 0.5], ["localization", 1.0], ["german", 0.8]],
        reasoning: [["analyze", 0.8], ["derive", 0.8], ["compare", 0.7], ["reason", 0.8], ["evaluate", 0.7], ["assess", 0.7], ["think", 0.5], ["logic", 0.8]],
        creative: [["image of", 1.0], ["picture of", 1.0], ["photo of", 1.0], ["generate an image", 1.0], ["draw", 1.0], ["video of", 1.0], ["generate a video", 1.0], ["create a video", 1.0], ["animation", 1.0], ["animate", 1.0], ["3d model", 1.0], ["cad", 1.0], ["obj file", 1.0], ["stl", 1.0], ["render", 0.8], ["generate music", 1.0], ["compose a song", 1.0], ["text to speech", 1.0], ["voiceover", 1.0], ["audiobook", 1.0], ["roleplay", 1.0], ["pretend to be", 1.0], ["game", 0.7], ["text adventure", 1.0], ["dnd", 1.0], ["write a blog", 1.0], ["essay", 1.0], ["marketing", 0.8], ["copywriting", 1.0], ["story", 1.0], ["generate an article", 1.0], ["email template", 1.0], ["newsletter", 1.0], ["cover letter", 1.0], ["resume", 1.0], ["poem", 1.0]],
        research: [["search", 0.8], ["research", 1.0], ["find information", 1.0], ["latest news", 1.0], ["current events", 1.0], ["who is", 0.8], ["what happened", 0.8]],
        education: [["explain", 0.8], ["teach me", 1.0], ["how does", 0.8], ["tutorial", 1.0], ["learn", 0.8], ["for a 5 year old", 1.0], ["what is", 0.6]],
        data_analysis: [["data", 0.6], ["csv", 1.0], ["analytics", 1.0], ["metrics", 1.0], ["chart", 1.0], ["graph", 1.0]],
        summarization: [["tl;dr", 1.0], ["tldr", 1.0], ["summarize this", 1.0], ["bullet points", 0.8], ["key takeaways", 1.0], ["summarize", 0.7]]
      };

      const intentScores = {};
      if (inputFormats.includes("audio")) intentScores.audio = (intentScores.audio || 0) + 2.0;
      if (inputFormats.includes("video")) intentScores.vision = (intentScores.vision || 0) + 2.0;
      if (inputFormats.includes("pdf") || inputFormats.includes("spreadsheet")) intentScores.document_qa = (intentScores.document_qa || 0) + 1.5;
      if (inputFormats.includes("image")) {
        if (["extract text", "ocr", "scan", "handwritten"].some(k => p.includes(k))) {
          intentScores.ocr = (intentScores.ocr || 0) + 2.0;
        } else {
          intentScores.vision = (intentScores.vision || 0) + 1.0;
        }
      }

      for (const [intent, keywords] of Object.entries(intentSignals)) {
        for (const [kw, weight] of keywords) {
          if (p.includes(kw)) {
            intentScores[intent] = (intentScores[intent] || 0) + weight;
          }
        }
      }

      let primary = "chat";
      let secondary = [];
      const reasonParts = [];

      const sortedIntents = Object.entries(intentScores).sort((a, b) => b[1] - a[1]);
      if (sortedIntents.length > 0) {
        primary = sortedIntents[0][0];
        secondary = sortedIntents.slice(1).filter(item => item[1] > 0.5).map(item => item[0]);
        reasonParts.push(`Intent scoring primary: ${primary} (${sortedIntents[0][1].toFixed(1)}).`);
        if (secondary.length > 0) {
          reasonParts.push(`Detected secondary intents: ${secondary.join(", ")}.`);
        }
      } else {
        if (isSimpleConversationalPrompt(prompt)) {
          reasonParts.push("Simple conversational prompt detected.");
        } else {
          reasonParts.push("No strong intents detected, defaulting to chat.");
        }
      }

      const domainSignals = {
        medical: ["medical", "diagnosis", "patient", "treatment", "symptom", "chest pain", "clinical", "prescription", "side effects", "disease", "therapy", "mental health", "depressed", "anxious", "suicidal", "need to talk", "lonely"],
        legal: ["legal", "contract", "compliance", "law", "litigation", "obligation", "clause", "sue", "lawsuit", "court", "attorney", "nda", "terms of service"],
        finance: ["finance", "tax", "investment", "trading", "portfolio", "stock", "crypto", "bitcoin", "mortgage", "loan", "interest rate"],
        security: ["security", "vulnerability", "exploit", "incident", "breach", "ddos", "phishing", "malware", "ransomware", "bypass", "hack"],
        sensitive: ["trump", "biden", "epstein", "election", "politics", "controversy", "nsfw", "porn", "violence", "kill", "bomb", "weapon", "illegal", "suicide", "self-harm", "drugs", "erotica", "sex", "nude", "naked", "fetish", "murder", "terrorist"],
        customer_support: ["support ticket", "customer", "refund", "support"]
      };

      const domainScores = {};
      for (const [dom, kws] of Object.entries(domainSignals)) {
        for (const kw of kws) {
          if (p.includes(kw)) {
            domainScores[dom] = (domainScores[dom] || 0) + 1.0;
          }
        }
      }

      let domain = "general";
      let riskTier = "low";
      let riskType = "standard";
      let documentType = "generic";

      const sortedDomains = Object.entries(domainScores).sort((a, b) => b[1] - a[1]);
      if (sortedDomains.length > 0) {
        const topDomain = sortedDomains[0][0];
        if (topDomain === "medical") { domain = "medical"; riskTier = "high"; riskType = "regulated_advice"; documentType = "medical_record"; }
        else if (topDomain === "legal") { domain = "legal"; riskTier = "high"; riskType = "regulated_advice"; documentType = "contract"; }
        else if (topDomain === "finance") { domain = "finance"; riskTier = "high"; riskType = "regulated_advice"; documentType = "financial_document"; }
        else if (topDomain === "security") { domain = "security"; riskTier = "high"; riskType = "security_sensitive"; documentType = "security_report"; }
        else if (topDomain === "sensitive") { domain = "sensitive"; riskTier = "high"; riskType = "safety_sensitive"; documentType = "controversial"; }
        else if (topDomain === "customer_support") { domain = "customer_support"; riskTier = "low"; riskType = "standard"; documentType = "support_record"; }
      } else if (["coding", "agent"].includes(primary)) {
        domain = "software"; riskTier = "medium"; riskType = "operational";
      } else if (["reasoning", "mathematics"].includes(primary)) {
        domain = "science"; riskTier = "medium"; riskType = "analytical";
      }

      let expectedOutput = "free_text";
      if (["json", "schema", "structured"].some(k => p.includes(k))) expectedOutput = "structured_json";
      else if (primary === "coding") expectedOutput = "code";

      let ambiguityScore = 0.15;
      if (["maybe", "not sure", "either", "somehow", "approximately", "i think"].some(k => p.includes(k))) ambiguityScore = 0.55;
      if (["unclear", "ambiguous", "open-ended"].some(k => p.includes(k))) ambiguityScore = 0.75;
      if (isSimpleConversationalPrompt(prompt)) ambiguityScore = 0.05;

      let actionability = "advisory";
      if (["do this", "execute", "send", "file", "submit", "trade", "prescribe"].some(k => p.includes(k))) actionability = "high";

      let decompositionNeeded = false;
      let needsVerification = false;
      const requiredStages = [];
      const combinedIntents = [primary, ...secondary];

      if (combinedIntents.includes("ocr")) requiredStages.push("ocr");
      if (combinedIntents.includes("vision")) requiredStages.push("vision_understanding");
      if (combinedIntents.includes("audio")) requiredStages.push("audio_understanding");

      if (combinedIntents.includes("document_qa")) {
        requiredStages.push("document_qa");
        if (["legal", "medical", "finance"].includes(domain)) {
          requiredStages.push("domain_reasoning");
          decompositionNeeded = true;
          needsVerification = true;
        }
      }

      for (const i of combinedIntents) {
        if (!["ocr", "vision", "audio", "document_qa"].includes(i) && !requiredStages.includes(i)) {
          requiredStages.push(i);
        }
      }

      if (expectedOutput === "structured_json") requiredStages.push("structured_output");

      if (requiredStages.length === 0) requiredStages.push(primary);
      else if (requiredStages.length > 1) decompositionNeeded = true;

      const workflowGraph = [];
      requiredStages.forEach((stage, idx) => {
        workflowGraph.push({
          stage_id: idx + 1,
          stage_name: stage,
          depends_on: idx === 0 ? [] : [idx]
        });
      });

      let parserConfidence = 0.78;
      if (ambiguityScore > 0.5) parserConfidence -= 0.15;
      if (decompositionNeeded) parserConfidence -= 0.05;

      return {
        primary_family: primary,
        secondary_families: secondary,
        required_stages: requiredStages,
        workflow_graph: workflowGraph,
        domain,
        risk_tier: riskTier,
        risk_type: riskType,
        expected_output: expectedOutput,
        ambiguity_score: ambiguityScore,
        actionability,
        document_type: documentType,
        decomposition_needed: decompositionNeeded,
        needs_verification: needsVerification,
        parser_confidence: parserConfidence,
        reason_summary: reasonParts.join(" ")
      };
    }
    function inferWorkflowProfile(primaryFamily, domain, inputFormats, prompt, complexity, riskTier) {
      const p = prompt.toLowerCase();
      // HIGH RISK or COMPLEX tasks → quality-first profiles (cost is near-irrelevant)
      if (riskTier === "high") return "high_risk";
      if (complexity === "high") return "complex_reasoning";
      if (primaryFamily === "chat" && domain === "general" && isSimpleConversationalPrompt(prompt)) return "latency_first";
      if (domain === "legal" && p.includes("contract")) return "contract_review_intake";
      if (domain === "legal" || domain === "medical" || domain === "finance") return "quality_first";
      if (p.includes("support") || domain === "customer_support") return "customer_support_summarization";
      if (primaryFamily === "coding") return "coding_assistant";
      if (primaryFamily === "ocr" && inputFormats.some(fmt => ["image", "pdf"].includes(fmt))) return "invoice_ocr_pipeline";
      if (primaryFamily === "audio") return p.includes("real-time") ? "real_time_voice_agent" : "audio_summary";
      if (primaryFamily === "translation") return "multilingual_chat";
      if (domain === "research" || complexity === "medium") return "research_drafting";
      return "generic_balanced";
    }
    async function parseTaskRequest(args) {
      const rc = args.request_constraints || defaultRequestConstraints();
      const tc = args.tenant_context || defaultTenantContext();
      let artifacts;
      let inputFormats;
      if (uploadedFiles.length) {
        artifacts = await inspectUploadedFiles(uploadedFiles);
        inputFormats = Array.from(new Set([...artifacts.map(a => a.format), "text"])).sort();
      } else {
        inputFormats = args.input_formats && args.input_formats.length ? args.input_formats : ["text"];
        artifacts = inspectLegacyArtifacts(inputFormats, args.prompt);
      }
      const conflictFlags = detectConflicts(args.prompt, artifacts);
      const previews = artifacts.map(a => a.extracted_text_preview).filter(Boolean);
      const extractedTextSummary = previews.length ? previews.join(" ").slice(0, 2000) : null;
      const detectedLanguages = Array.from(new Set(artifacts.map(a => a.detected_language).filter(Boolean))).sort();
      const totalFileSize = artifacts.reduce((acc, a) => acc + (a.file_size_bytes || 0), 0);
      const hard = deterministicExtract(args.prompt, inputFormats, args.estimated_tokens);
      if (!hard.requires_ocr) {
        for (const a of artifacts) {
          if (["pdf", "image"].includes(a.format) && (a.scan_likelihood || 0) >= 0.6) {
            hard.requires_ocr = true;
            break;
          }
        }
      }
      const soft = fallbackStructuredSemanticParse(args.prompt, inputFormats, args.estimated_tokens, artifacts);
      const inferredTopics = artifacts.map(a => a.inferred_topic).filter(Boolean);
      if (inferredTopics.length && soft.domain === "general") {
        const topicToDomain = {
          legal_contract: ["legal", "high", "regulated_advice", "contract"],
          financial_document: ["finance", "high", "regulated_advice", "financial_document"],
          medical_record: ["medical", "high", "regulated_advice", "medical_record"],
          security_report: ["security", "high", "security_sensitive", "security_report"],
          research_paper: ["research", "low", "standard", "research_paper"],
          support_record: ["customer_support", "low", "standard", "support_record"]
        };
        const mapped = topicToDomain[inferredTopics[0]];
        if (mapped) {
          soft.domain = mapped[0];
          soft.risk_tier = mapped[1];
          soft.risk_type = mapped[2];
          soft.document_type = mapped[3];
        }
      }
      let comp_score = 0;
      if (args.estimated_tokens > 100000) comp_score += 2;
      else if (args.estimated_tokens > 20000) comp_score += 1;
      if (soft.primary_family.includes("reasoning") || soft.primary_family.includes("mathematics")) comp_score += 1;
      if (soft.risk_tier === "high" || soft.risk_tier === "critical") comp_score += 1;
      if (soft.required_stages.length > 1) comp_score += 1;
      
      const complexity = comp_score >= 3 ? "high" : comp_score >= 1 ? "medium" : "low";
      const workflowProfile = inferWorkflowProfile(soft.primary_family, soft.domain, inputFormats, args.prompt, complexity, soft.risk_tier);
      const requiresVerifier = hard.requires_verifier || soft.needs_verification || soft.risk_tier === "high" || rc.mandatory_verifier;
      const safetySensitive = soft.risk_tier === "high" || ["regulated_advice", "security_sensitive"].includes(soft.risk_type);
      if (rc.no_web_access) hard.requires_web_search = false;
      return {
        raw_prompt: args.prompt,
        input_formats: Array.from(new Set([...inputFormats, "text"])).sort(),
        estimated_tokens: args.estimated_tokens,
        estimated_output_tokens: args.estimated_output_tokens,
        artifacts,
        primary_family: soft.primary_family,
        secondary_families: soft.secondary_families,
        required_stages: soft.required_stages,
        workflow_graph: soft.workflow_graph,
        complexity,
        domain: soft.domain,
        risk_tier: soft.risk_tier,
        risk_type: soft.risk_type,
        required_formats: hard.required_formats,
        requires_json: hard.requires_json,
        requires_function_calling: hard.requires_function_calling,
        requires_web_search: hard.requires_web_search,
        requires_ocr: hard.requires_ocr,
        requires_citations: hard.requires_citations,
        requires_verifier: requiresVerifier,
        min_context_window: hard.min_context_window,
        expected_output: soft.expected_output,
        ambiguity_score: soft.ambiguity_score,
        safety_sensitive: safetySensitive,
        actionability: soft.actionability,
        document_type: soft.document_type,
        decomposition_needed: soft.decomposition_needed,
        workflow_profile: workflowProfile,
        parser_confidence: soft.parser_confidence,
        conflict_flags: conflictFlags,
        extracted_text_summary: extractedTextSummary,
        detected_languages: detectedLanguages,
        total_file_size_bytes: totalFileSize,
        request_constraints: rc,
        tenant_context: tc
      };
    }
    function defaultRequestConstraints() {
      return {
        max_latency_ms: null,
        max_cost_usd: null,
        allowed_providers: [],
        disallowed_providers: [],
        allowed_tiers: [],
        no_open_weight: false,
        no_web_access: false,
        min_confidence: 0.25,
        required_region: null,
        privacy_class: "standard",
        must_use_single_model: false,
        mandatory_verifier: false
      };
    }
    function defaultTenantContext() {
      return {
        tenant_id: "default",
        tenant_name: "default",
        policy_overlay: {},
        budget_remaining_usd: null,
        preferred_profiles: [],
        allowed_models: []
      };
    }
    function signalValue(model, signal) {
      if (!signal || !signal.includes(":")) return 0.5;
      const [kind, key] = signal.split(":");
      if (kind === "perf") return model.performance?.[key] ?? 0.5;
      if (kind === "bench") {
        let val = model.benchmarks?.[key] ?? 0.5;
        return val > 1.0 ? val / 100.0 : val;
      }
      if (kind === "domain") return Math.min(1.0, model.domains?.[key] ?? 0.5);
      return 0.5;
    }
    function familyFit(model, task) {
      const sigmap = TASK_FAMILY_SIGNAL_MAP[task.primary_family];
      let base;
      if (!sigmap) {
        base = model.domains.general ?? 0.5;
      } else {
        base = Object.entries(sigmap).reduce((acc, [sig, w]) => acc + signalValue(model, sig) * w, 0);
      }
      const domKey = DOMAIN_EXPERTISE_MAP[task.domain] || "general";
      const domFit = clamp(model.domains[domKey] ?? 0.5);
      
      let fit = 0.75 * base + 0.25 * domFit;
      if (task.expected_output === "structured_json") {
        fit = 0.70 * fit + 0.30 * (model.performance?.json_reliability ?? 0.5);
      }
      if (task.min_context_window > 100000) fit = 0.70 * fit + 0.30 * (model.performance.long_context ?? 0.5);
      if (task.requires_ocr) fit = 0.70 * fit + 0.30 * (model.performance.ocr ?? 0.5);
      if (task.input_formats.includes("spreadsheet")) fit = 0.80 * fit + 0.20 * (model.performance.spreadsheet_reasoning ?? 0.5);
      if (task.input_formats.includes("audio")) fit = 0.70 * fit + 0.30 * (model.performance.audio_understanding ?? 0.5);
      return clamp(fit);
    }
    function stageFit(model, stageName, task) {
      const map = {
        domain_reasoning: () => clamp(model.domains[DOMAIN_EXPERTISE_MAP[task.domain] || "general"] ?? 0.5),
        structured_output: () => model.performance?.json_reliability ?? 0.5,
        audio_understanding: () => model.performance?.audio_understanding ?? 0.5,
        vision_understanding: () => model.performance.vision_understanding ?? 0.5,
        ocr: () => model.performance.ocr ?? 0.5,
        coding: () => model.performance.coding ?? 0.5,
        document_qa: () => model.performance.document_qa ?? 0.5,
        summarization: () => model.performance.summarization ?? 0.5
      };
      return map[stageName] ? map[stageName]() : familyFit(model, task);
    }
    function compositeWorkflowFit(model, task) {
      const scores = task.required_stages.map(stage => stageFit(model, stage, task));
      return scores.length ? mean(scores) : familyFit(model, task);
    }
    function attachContextualQuality(models, task) {
      return models.map(source => {
        const model = deepCopy(source);
        const globalPrior = model.priors?.global || {alpha: 1.0, beta: 1.0};
        const globalMean = betaMean(globalPrior.alpha, globalPrior.beta);
        const [alpha, beta] = effectivePrior(model, task.primary_family);
        const familyMean = betaMean(alpha, beta);
        const familyVariance = betaVariance(alpha, beta);
        const famFit = familyFit(model, task);
        const wfFit = compositeWorkflowFit(model, task);
        const domKey = DOMAIN_EXPERTISE_MAP[task.domain] || "general";
        const domFit = clamp(model.domains?.[domKey] ?? 0.5);
        const rtFit = runtimeHealthScore(model);
        const frFit = freshnessScore(model);
        const contextualMean = convexCombine(
          [globalMean, familyMean, famFit, wfFit, domFit, frFit],
          [0.12, 0.22, 0.18, 0.23, 0.15, 0.10]
        );
        model.q = {
          global_mean: globalMean,
          family_mean: familyMean,
          family_variance: familyVariance,
          family_fit: famFit,
          workflow_fit: wfFit,
          domain_fit: domFit,
          runtime_fit: rtFit,
          freshness_fit: frFit,
          contextual_mean: contextualMean,
          runtime_adjusted_mean: clamp(0.76 * contextualMean + 0.24 * rtFit),
          uncertainty: Math.sqrt(Math.max(familyVariance, 1e-9)),
          alpha,
          beta,
          reliability: reliabilityScore(model)
        };
        return model;
      });
    }
    function riskSupport(model, task) {
      const safetyKey = DOMAIN_SAFETY_MAP[task.domain] || "general";
      let base = model.safety[safetyKey] ?? model.safety.general ?? 0.7;
      if (task.risk_type === "regulated_advice") {
        base = 0.8 * base + 0.2 * (model.safety.regulated_advice ?? base);
      }
      if (task.risk_tier === "low") return Math.min(1.0, base + 0.05);
      return base;
    }
    function staticCostScore(model) {
      return model.pricing.relative_cost_score;
    }
    function staticLatencyScore(model) {
      return model.ops_static.latency_score;
    }
    function reliabilityScore(model) {
      return model.ops_static.reliability;
    }
    function freshnessScore(model) {
      const sec = model.ops_dynamic.telemetry_freshness_sec ?? 60;
      return Math.max(0.0, 1.0 - Math.min(sec / 600.0, 1.0));
    }
    function incidentPenalty(status) {
      return { green: 0.0, yellow: 0.08, orange: 0.18, red: 0.35 }[status] ?? 0.10;
    }
    function runtimeHealthScore(model) {
      const dyn = model.ops_dynamic;
      const components = [
        [0.20, Math.max(0.0, 1.0 - Math.min(dyn.recent_latency_ms / 5000.0, 1.0))],
        [0.18, Math.max(0.0, 1.0 - Math.min(dyn.recent_failure_rate / 0.15, 1.0))],
        [0.16, dyn.current_availability],
        [0.10, Math.max(0.0, 1.0 - dyn.rate_limit_pressure)],
        [0.08, Math.max(0.0, 1.0 - dyn.queue_pressure)],
        [0.10, Math.max(0.0, 1.0 - incidentPenalty(dyn.incident_status))],
        [0.08, Math.max(0.0, 1.0 - 0.5 * dyn.budget_pressure)],
        [0.10, freshnessScore(model)]
      ];
      return clamp(components.reduce((acc, [w, v]) => acc + w * v, 0));
    }
    function betaMean(alpha, beta) {
      return alpha / (alpha + beta);
    }
    function betaVariance(alpha, beta) {
      return (alpha * beta) / (((alpha + beta) ** 2) * (alpha + beta + 1));
    }
      function effectivePrior(model, family) {
        const fam = (model.priors?.task_family && model.priors.task_family[family]) || model.priors?.global || {alpha: 1.0, beta: 1.0};
        let alpha = Number(fam.alpha) || 1.0;
      let beta = Number(fam.beta) || 1.0;
      const ev = model.evaluation || {};
      if ((ev.samples || 0) > 0) {
        alpha += ev.wins || 0;
        beta += ev.losses || 0;
      }
      return [alpha, beta];
    }
    function convexCombine(values, weights) {
      const total = weights.reduce((a, b) => a + b, 0);
      if (total === 0) return mean(values);
      return values.reduce((acc, v, i) => acc + v * weights[i], 0) / total;
    }
    function estimateRequestCostUsd(model, inputTokens, outputTokens, isCached = false) {
      let inCost = model.pricing?.input_cost || 0.0;
      if (isCached) inCost *= 0.5;
      
      let inToks = inputTokens;
      if (inToks === undefined || inToks === null || isNaN(inToks)) {
        inToks = 500;
      }
      
      let outTokens = outputTokens;
      if (outTokens === undefined || outTokens === null || isNaN(outTokens)) {
        outTokens = 50; 
      }
      
      return ((inToks / 1_000_000) * inCost) +
        ((outTokens / 1_000_000) * (model.pricing?.output_cost || 0.0));
    }
    
    function estimateRequestLatencyMs(model, task, nStages = 1) {
      const lp = model.latency_profile || {};
      const ttft = lp.ttft_ms_mean || (model.ops_dynamic?.recent_latency_ms * 0.3) || 500;
      
      // Users interpret "Latency" as Time-To-First-Token (TTFT) rather than total generation time.
      // We will only return TTFT (plus small stage overhead) to avoid confusing users.
      const complexityMult = { low: 1.0, medium: 1.25, high: 1.60 }[task.complexity] || 1.0;
      let modalityMult = 1.0;
      if (task.input_formats.includes("audio") || task.input_formats.includes("video")) modalityMult = 1.35;
      else if (task.input_formats.includes("image") || task.input_formats.includes("pdf")) modalityMult = 1.15;
      
      return ttft * complexityMult * modalityMult * nStages;
    }

      function isFeasible(model, task) {
        if (task.requires_ocr && !model.capabilities.ocr) return false;
        if (task.requires_json && !model.capabilities.json_mode) return false;
        if (task.requires_function_calling && !model.capabilities.function_calling) return false;
        if (task.requires_web_search && !model.capabilities.web_search) return false;
        if (task.requires_citations && !model.capabilities.citation_support) return false;
        const required = task.min_context_window + task.estimated_output_tokens;
      if ((model.context?.window || 8192) < required) return false;
      return true;
    }

    function filterByPolicy(model, task, policyNotes) {
      const rc = task.request_constraints;
      if (rc.allowed_providers && rc.allowed_providers.length) {
        if (!rc.allowed_providers.some(p => p.toLowerCase() === model.provider.toLowerCase())) return false;
      }
      if (rc.disallowed_providers && rc.disallowed_providers.length) {
        if (rc.disallowed_providers.some(p => p.toLowerCase() === model.provider.toLowerCase())) return false;
      }
      if (rc.allowed_tiers && rc.allowed_tiers.length) {
        if (!rc.allowed_tiers.includes(model.tier)) return false;
      }
      if (rc.no_open_weight && model.open_weight) return false;
      if (rc.required_region && model.region !== rc.required_region) return false;
      const modelTier = (model.tier || "").toLowerCase();
      if (rc.privacy_class === "strict" && model.data_privacy !== "strict") {
        if (task.safety_sensitive && modelTier.includes("frontier")) {
          policyNotes.push(`Warning: Model ${model.name} selected for sensitive task without strict privacy.`);
        } else {
          return false;
        }
      }
      if (task.safety_sensitive) {
        if (modelTier.includes("efficient") || modelTier.includes("low")) return false;
        if (!modelTier.includes("frontier") && !modelTier.includes("high")) {
          policyNotes.push("Safety sensitive task restricted to high/frontier tiers.");
          return false; // FIXED BUG: strictly reject it!
        }
      }
      if (rc.max_cost_usd !== null) {
        if (estimateRequestCostUsd(model, task.estimated_tokens, task.estimated_output_tokens, task.requires_context_caching) > rc.max_cost_usd) return false;
      }
      if (rc.max_latency_ms !== null) {
        if (estimateRequestLatencyMs(model, task, task.required_stages.length) > rc.max_latency_ms) return false;
      }
      return true;
    }

    function scoreModel(model, task, nStages, sampledQuality = null) {
      const qScore = sampledQuality !== null ? sampledQuality : compositeWorkflowFit(model, task);
      const riskScore = riskSupport(model, task);
      const cScore = staticCostScore(model);
      const lScore = staticLatencyScore(model);
      const rScore = reliabilityScore(model);
      const hScore = runtimeHealthScore(model);
      
      // Complexity modifier: for complex/high tasks, further suppress cost weight and boost quality
      let profile = Object.assign({}, WEIGHT_PROFILES[task.workflow_profile] || WEIGHT_PROFILES.generic_balanced);
      if (task.complexity === "high") {
        const qualityBonus = 0.10;
        const costPenalty  = Math.min(profile.cost, qualityBonus * 0.7);
        const latPenalty   = Math.min(profile.latency, qualityBonus * 0.3);
        profile.quality  = Math.min(0.55, profile.quality + qualityBonus);
        profile.cost     = Math.max(0.01, profile.cost    - costPenalty);
        profile.latency  = Math.max(0.02, profile.latency - latPenalty);
      } else if (task.complexity === "medium") {
        const qualityBonus = 0.05;
        const costPenalty  = Math.min(profile.cost, qualityBonus);
        profile.quality = Math.min(0.50, profile.quality + qualityBonus);
        profile.cost    = Math.max(0.02, profile.cost    - costPenalty);
      }
      
      // Also penalise models whose mMLU/HumanEval score is below a threshold for complex tasks
      let capabilityGate = 0;
      if (task.complexity === "high" || task.risk_tier === "high") {
        const humanEval = model.performance?.human_eval_score ?? 50;
        const mMLU      = model.performance?.mMLU_score ?? 50;
        // below 70 on these benchmarks → hard penalty for complex tasks
        capabilityGate = Math.max(0, (70 - Math.min(humanEval, mMLU)) / 100);
      }
      
      const prior = effectivePrior(model, task.primary_family);
      const uncertainty = betaVariance(prior[0], prior[1]);
      const penalty = Math.min(1.0, uncertainty * 1.5);

      const components = [
        qScore * profile.quality,
        (1.0 - penalty) * profile.uncertainty,
        cScore * profile.cost,
        lScore * profile.latency,
        rScore * profile.reliability,
        riskScore * profile.riskfit,
        hScore * profile.runtime
      ];
      return clamp(components.reduce((a, b) => a + b, 0) - capabilityGate);
    }

    function isDominated(m1, m2, task, nStages) {
      const q1 = compositeWorkflowFit(m1, task);
      const q2 = compositeWorkflowFit(m2, task);
      const c1 = estimateRequestCostUsd(m1, task.estimated_tokens, task.estimated_output_tokens, task.requires_context_caching);
      const c2 = estimateRequestCostUsd(m2, task.estimated_tokens, task.estimated_output_tokens, task.requires_context_caching);
      const l1 = estimateRequestLatencyMs(m1, task, nStages);
      const l2 = estimateRequestLatencyMs(m2, task, nStages);
      
      const worseOrEq = (q1 <= q2) && (c1 >= c2) && (l1 >= l2);
      const strictlyWorse = (q1 < q2) || (c1 > c2) || (l1 > l2);
      return worseOrEq && strictlyWorse;
    }

    function paretoFrontier(models, task, nStages) {
      const frontier = [];
      for (const m1 of models) {
        let dominated = false;
        for (const m2 of models) {
          if (m1.name !== m2.name && isDominated(m1, m2, task, nStages)) {
            dominated = true;
            break;
          }
        }
        if (!dominated) frontier.push(m1);
      }
      return frontier;
    }

    function boundedBetaSample(mean, variance) {
      if (variance <= 0) return mean;
      const alpha = mean * ((mean * (1 - mean) / variance) - 1);
      const beta = (1 - mean) * ((mean * (1 - mean) / variance) - 1);
      if (alpha <= 0 || beta <= 0) return mean;
      return GLOBAL_RNG.beta(alpha, Math.max(0.1, beta));
    }

    function thompsonSampleConfidence(candidates, task, nDraws = 1500) {
      if (candidates.length === 0) return { selectedId: null, confMap: {} };
      if (candidates.length === 1) {
        const res = {};
        res[candidates[0].name] = 1.0;
        return { selectedId: candidates[0].name, confMap: res };
      }
      const scores = candidates.map(m => scoreModel(m, task, task.required_stages.length));
      const priors = candidates.map(m => effectivePrior(m, task.primary_family));
      
      const winCounts = new Array(candidates.length).fill(0);
      
      const weightProfile = WEIGHT_PROFILES[task.workflow_profile] || WEIGHT_PROFILES.generic_balanced;
      for (let i = 0; i < nDraws; i++) {
        let bestIdx = -1;
        let bestVal = -Infinity;
        for (let j = 0; j < candidates.length; j++) {
          const m = candidates[j];
          const meanQuality = m.q?.runtime_adjusted_mean ?? compositeWorkflowFit(m, task);
          const variance = Math.max(m.q?.family_variance || 0.0004, 0.0001);
          const sq = boundedBetaSample(meanQuality, variance);
          
          let outTokens = task.estimated_output_tokens;
          if (outTokens === undefined || outTokens === null) {
              outTokens = task.complexity === "high" ? 1000 : (task.complexity === "medium" ? 250 : 50);
          }
          
          const cost = estimateRequestCostUsd(m, task.estimated_tokens, outTokens, task.requires_context_caching);
          const latency = estimateRequestLatencyMs(m, task, task.required_stages.length);
          
          const costScore = 1.0 - Math.min(1.0, cost / 0.10);
          const latScore = 1.0 - Math.min(1.0, latency / 10000);
          const latScoreDraw = boundedBetaSample(latScore, 0.05);
          
          const su = (weightProfile.quality || 0) * sq +
                     (weightProfile.cost || 0) * costScore +
                     (weightProfile.latency || 0) * Math.min(1.0, Math.max(0.0, latScoreDraw)) +
                     (weightProfile.reliability || 0) * reliabilityScore(m) +
                     (weightProfile.runtime || 0) * runtimeHealthScore(m);
                     
          if (su > bestVal) {
            bestVal = su;
            bestIdx = j;
          }
        }
        if (bestIdx !== -1) winCounts[bestIdx]++;
      }
      
      const confMap = {};
      let bestModelId = null;
      let maxConf = -1;
      for (let j = 0; j < candidates.length; j++) {
        const conf = winCounts[j] / nDraws;
        confMap[candidates[j].name] = conf;
        if (conf > maxConf) {
          maxConf = conf;
          bestModelId = candidates[j].name;
        }
      }
      return { selectedId: bestModelId, confMap };
    }

    function planExecution(task) {
      const startTime = performance.now();
      const nStages = task.required_stages.length;
      let candidates = ATLAS_MODEL_REGISTRY.slice().filter(m => enabledModels.includes(m.name));
      
      const policyNotes = [];
      if (task.domain === "legal") policyNotes.push("Legal task requires policy scrutiny and verification.");
      if (task.risk_tier === "high") policyNotes.push("High-risk task restricted to frontier-grade models.");
      
      candidates = candidates.filter(m => isFeasible(m, task));
      candidates = candidates.filter(m => filterByPolicy(m, task, policyNotes));
      
      if (!candidates.length) {
        return {
          id: uuidLike(),
          status: "POLICY_ABSTAIN",
          task, plan: null, policy_notes: policyNotes,
          abstain: true, escalate_to_human: false,
          confidence_map: {}, timestamp: nowIso(),
          routing_latency_ms: performance.now() - startTime
        };
      }
      
      candidates = attachContextualQuality(candidates, task);
      candidates = paretoFrontier(candidates, task, nStages);
      
      const { selectedId, confMap } = thompsonSampleConfidence(candidates, task);
      const topModel = candidates.find(m => m.name === selectedId);
      const topConf = confMap[selectedId];
      
      const sortedIds = Object.keys(confMap).sort((a, b) => confMap[b] - confMap[a]);
      const margin = sortedIds.length > 1 ? topConf - confMap[sortedIds[1]] : topConf;
      
      const minRequired = task.request_constraints.min_confidence;
      let abstain = topConf < minRequired;
      let escalate = topConf < CONFIDENCE_ESCALATE_THRESHOLD || task.safety_sensitive;
      
      const fallbacks = sortedIds.slice(1, 4);
      
      const verifiers = [];
      if (task.requires_verifier && !abstain) {
        const verifierCandidates = ATLAS_MODEL_REGISTRY.filter(m => 
          m.name !== topModel.name && isFeasible(m, task) && (m.tier || "").toLowerCase().includes("frontier")
        ).sort((a, b) => scoreModel(b, task, 1) - scoreModel(a, task, 1));
        if (verifierCandidates.length) verifiers.push(verifierCandidates[0].name);
        if (task.risk_tier === "high" && verifierCandidates.length > 1) {
          verifiers.push(verifierCandidates[1].name);
        }
      }
      
      const plan = {
        id: uuidLike(),
        type: task.requires_verifier ? "verification_chain" : (task.required_stages.length > 1 ? "pipeline" : "single_model"),
        primary_model: topModel,
        fallback_models: fallbacks,
        verifier_models: verifiers,
        expected_latency_ms: estimateRequestLatencyMs(topModel, task, nStages),
        expected_cost_usd: estimateRequestCostUsd(topModel, task.estimated_tokens, task.estimated_output_tokens),
        expected_quality: compositeWorkflowFit(topModel, task),
        confidence: topConf,
        confidence_margin: margin,
        stages: task.required_stages
      };
      
      return {
        id: uuidLike(),
        status: abstain ? "ABSTAINED" : "ROUTED",
        task, plan, policy_notes: Array.from(new Set(policyNotes)),
        abstain, escalate_to_human: escalate,
        confidence_map: confMap, timestamp: nowIso(),
        routing_latency_ms: performance.now() - startTime
      };
    }

    // --- DOM AND UI LOGIC ---

    function showToast(title, body) {
      const t = document.getElementById("toast");
      document.getElementById("toastTitle").innerText = title;
      document.getElementById("toastBody").innerText = body;
      t.classList.add("show");
      setTimeout(() => t.classList.remove("show"), 3000);
    }

    function initFormats() {
      const container = document.getElementById("formatChecks");
      SUPPORTED_FORMATS.forEach(f => {
        const lbl = document.createElement("label");
        lbl.className = "check-card";
        const chk = document.createElement("input");
        chk.type = "checkbox";
        chk.value = f;
        chk.name = "formatInput";
        if (f === "text") chk.checked = true;
        lbl.appendChild(chk);
        lbl.appendChild(document.createTextNode(" " + f.charAt(0).toUpperCase() + f.slice(1)));
        container.appendChild(lbl);
      });
    }

    const dropZone = document.getElementById("fileDrop");
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    dropZone.addEventListener("dragover", e => { e.preventDefault(); dropZone.classList.add("dragover"); });
    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
    dropZone.addEventListener("drop", e => {
      e.preventDefault();
      dropZone.classList.remove("dragover");
      if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
    });
    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", e => handleFiles(e.target.files));

    function handleFiles(files) {
      for (const f of files) uploadedFiles.push(f);
      renderFileList();
    }

    function renderFileList() {
      fileList.innerHTML = "";
      uploadedFiles.forEach((f, i) => {
        const div = document.createElement("div");
        div.className = "file-item";
        div.innerHTML = `<strong>${f.name}</strong> <span>${(f.size / 1024).toFixed(1)} KB</span>`;
        const x = document.createElement("span");
        x.innerText = "✕";
        x.style.cursor = "pointer";
        x.style.color = "var(--danger)";
        x.onclick = () => { uploadedFiles.splice(i, 1); renderFileList(); };
        div.appendChild(x);
        fileList.appendChild(div);
      });
    }

    document.getElementById("registryPill").innerText = `Registry: ${ATLAS_MODEL_REGISTRY.length} models`;
    document.getElementById("metricModels").innerText = ATLAS_MODEL_REGISTRY.length;
    



    document.getElementById("resetBtn").addEventListener("click", () => {
      document.getElementById("routerForm").reset();
      uploadedFiles = [];
      renderFileList();
      document.getElementById("results").innerHTML = `
        <div class="panel empty-state">
          <div class="empty-card">
            <div class="big-icon">⌁</div>
            <h3>Ready to route</h3>
            <p>Enter a prompt or load a demo scenario to see the results.</p>
          </div>
        </div>`;
    });

    document.getElementById("copyJsonBtn").addEventListener("click", () => {
      if (!lastDecision) { showToast("Error", "No decision to copy."); return; }
      navigator.clipboard.writeText(JSON.stringify(lastDecision, null, 2));
      showToast("Copied", "Decision JSON copied to clipboard.");
    });

    document.getElementById("downloadHtmlBtn").addEventListener("click", () => {
      const htmlContent = document.documentElement.outerHTML;
      const blob = new Blob([htmlContent], {type: "text/html"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "atlas_router_dashboard.html";
      a.click();
      showToast("Downloaded", "Saved atlas_router_dashboard.html");
    });

    function renderResults(dec) {
      lastDecision = dec;
      const res = document.getElementById("results");
      
      if (dec.status === "POLICY_ABSTAIN") {
        res.innerHTML = `
          <div class="selected-card" style="border-color: rgba(251, 113, 133, 0.4);">
            <div class="status-row">
              <div class="badge danger">POLICY ABSTAIN</div>
            </div>
            <h2 class="selected-model" style="color: #fb7185;">Request Denied</h2>
            <p class="selected-meta">The request violated policy constraints and was rejected before routing.</p>
            <div class="bars" style="margin-top: 20px;">
              ${dec.policy_notes.map(n => `<div class="bar-row"><span style="color:#fecdd3;">!</span> <span>${n}</span></div>`).join("")}
            </div>
          </div>
        `;
        return;
      }

      const plan = dec.plan;
      const pMod = plan.primary_model;
      const confDeg = (plan.confidence * 360).toFixed(1);
      const confPct = (plan.confidence * 100).toFixed(1);
      
      let badgeClass = "success";
      let badgeText = "ROUTED";
      if (dec.abstain) { badgeClass = "danger"; badgeText = "ABSTAINED"; }
      else if (dec.escalate_to_human) { badgeClass = "warn"; badgeText = "ESCALATED"; }

      let h = `
        <div class="decision-hero">
          <div class="selected-card">
            <div class="status-row">
              <div class="badge ${badgeClass}">${badgeText}</div>
              <span style="color:var(--muted); font-size:12px;">${dec.routing_latency_ms.toFixed(1)} ms</span>
            </div>
            <h2 class="selected-model">${pMod.name}</h2>
            <p class="selected-meta">${titleCaseSnake(dec.task.primary_family)} • ${titleCaseSnake(dec.task.domain)} Domain • ${dec.task.risk_tier.toUpperCase()} Risk</p>
            
            <div class="kpi-grid">
              <div class="kpi">
                <strong>$${plan.expected_cost_usd.toFixed(4)}</strong>
                <span>Est. Cost</span>
              </div>
              <div class="kpi">
                <strong>${plan.expected_latency_ms.toFixed(0)} ms</strong>
                <span>Est. Latency</span>
              </div>
              <div class="kpi">
                <strong>${plan.stages.length}</strong>
                <span>Pipeline Stages</span>
              </div>
              <div class="kpi">
                <strong>${plan.verifier_models.length}</strong>
                <span>Verifiers</span>
              </div>
            </div>
          </div>
          
          <div class="chart-card" style="text-align: center; display: flex; flex-direction: column; justify-content: center;">
            <h3 style="margin:0 0 10px; font-size:15px; letter-spacing:-0.02em;">Thompson Confidence</h3>
            <div class="gauge" id="mainGauge" style="--p: 0deg;" data-target="${confDeg}">
              <div class="gauge-content">
                <strong>${confPct}%</strong>
                <span>margin +${(plan.confidence_margin * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="panel">
          <div class="section-title">
            <h3>Alternative Candidates</h3>
            <span class="badge" style="background: rgba(255,255,255,0.04); border:0;">Pareto Frontier</span>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Model</th>
                  <th>Thompson Win %</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
      `;
      
      const sortedIds = Object.keys(dec.confidence_map).sort((a, b) => dec.confidence_map[b] - dec.confidence_map[a]).slice(0, 5);
      
      sortedIds.forEach((id, idx) => {
        const conf = (dec.confidence_map[id] * 100).toFixed(1);
        let role = "Discarded";
        if (id === pMod.name) role = "<span style='color:var(--success);'>Primary</span>";
        else if (plan.fallback_models.includes(id)) role = "Fallback";
        else if (plan.verifier_models.includes(id)) role = "<span style='color:var(--accent-2);'>Verifier</span>";
        
        h += `
          <tr>
            <td><div class="rank">${idx + 1}</div></td>
            <td><strong>${id}</strong></td>
            <td>
              <div class="conf-bar-row">
                <div class="bar-track"><div class="bar-fill" style="width: ${conf}%;"></div></div>
                <span>${conf}%</span>
              </div>
            </td>
            <td>${role}</td>
          </tr>
        `;
      });
      
      h += `
              </tbody>
            </table>
          </div>
        </div>
      `;
      
      res.innerHTML = h;
      res.scrollIntoView({ behavior: "smooth", block: "start" });
      
      setTimeout(() => {
        const g = document.getElementById('mainGauge');
        if(g) {
          g.style.setProperty('--p', g.getAttribute('data-target') + 'deg');
        }
      }, 50);
    }

    document.getElementById("routerForm").addEventListener("submit", async e => {
      e.preventDefault();
      const prompt = document.getElementById("prompt").value;
      if (!prompt) { showToast("Error", "Prompt is required."); return; }
      
      const submitBtn = document.querySelector("#routerForm button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = "Inspecting Artifacts...";
      submitBtn.disabled = true;

      try {
        const args = {
          prompt,
          input_formats: [],
          estimated_tokens: parseInt(document.getElementById("estimatedTokens").value) || 2000,
          estimated_output_tokens: parseInt(document.getElementById("estimatedOutputTokens").value) || 1200,
          request_constraints: {
            max_latency_ms: parseInt(document.getElementById("maxLatency").value) || null,
            max_cost_usd: parseFloat(document.getElementById("maxCost").value) || null,
            allowed_providers: document.getElementById("allowedProviders").value.split(",").map(s=>s.trim()).filter(Boolean),
            disallowed_providers: document.getElementById("disallowedProviders").value.split(",").map(s=>s.trim()).filter(Boolean),
            allowed_tiers: [],
            no_open_weight: document.getElementById("noOpenWeight").checked,
            no_web_access: document.getElementById("noWebAccess").checked,
            min_confidence: parseFloat(document.getElementById("minConfidence").value) || 0.55,
            required_region: null,
            privacy_class: "standard",
            must_use_single_model: document.getElementById("singleModel").checked,
            mandatory_verifier: document.getElementById("mandatoryVerifier").checked
          },
          tenant_context: defaultTenantContext()
        };
        
        const task = await parseTaskRequest(args);
        if (args.request_constraints.must_use_single_model) {
          task.required_stages = [task.primary_family];
        }
        task.workflow_profile = document.getElementById("profileName").value;
        
        const dec = planExecution(task);
        renderResults(dec);
        showToast("Routed", dec.status === "ROUTED" ? "Execution plan generated." : "Task abstained.");
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  

    // --- MODEL MANAGER LOGIC ---
    let enabledModels = JSON.parse(localStorage.getItem('enabledAtlasModels')) || ATLAS_MODEL_REGISTRY.map(m => m.name);
    
    const manageModelsBtn = document.getElementById("manageModelsBtn");
    const modelModal = document.getElementById("modelModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalBody = document.getElementById("modalBody");
    const modalSearch = document.getElementById("modalSearch");
    
    function updateManageBtnText() {
      if(manageModelsBtn) manageModelsBtn.innerText = `⚙️ Manage Enabled Models (${enabledModels.length}/${ATLAS_MODEL_REGISTRY.length})`;
    }
    updateManageBtnText();
    
    function renderModalList(filterText = "") {
      modalBody.innerHTML = "";
      const text = filterText.toLowerCase();
      
      ATLAS_MODEL_REGISTRY.forEach(m => {
        if (text && !m.name.toLowerCase().includes(text) && !(m.provider || "").toLowerCase().includes(text)) return;
        
        const div = document.createElement("div");
        div.className = "model-option";
        
        const isChecked = enabledModels.includes(m.name);
        
        div.innerHTML = `
          <div>
            <div style="font-weight: 600;">${m.name}</div>
            <div style="font-size: 11px; color: var(--muted);">${m.provider} &bull; $${m.pricing?.input_cost||0}/1M</div>
          </div>
          <input type="checkbox" ${isChecked ? "checked" : ""} />
        `;
        
        div.onclick = () => {
          if (enabledModels.includes(m.name)) {
            enabledModels = enabledModels.filter(n => n !== m.name);
          } else {
            enabledModels.push(m.name);
          }
          localStorage.setItem('enabledAtlasModels', JSON.stringify(enabledModels));
          updateManageBtnText();
          renderModalList(modalSearch.value);
        };
        modalBody.appendChild(div);
      });
    }
    
    if(manageModelsBtn) manageModelsBtn.addEventListener("click", () => {
      renderModalList();
      modelModal.classList.add("active");
    });
    
    if(closeModalBtn) closeModalBtn.addEventListener("click", () => modelModal.classList.remove("active"));
    
    if(document.getElementById("selectAllBtn")) document.getElementById("selectAllBtn").addEventListener("click", () => {
      enabledModels = ATLAS_MODEL_REGISTRY.map(m => m.name);
      localStorage.setItem('enabledAtlasModels', JSON.stringify(enabledModels));
      updateManageBtnText();
      renderModalList(modalSearch.value);
    });
    
    if(document.getElementById("deselectAllBtn")) document.getElementById("deselectAllBtn").addEventListener("click", () => {
      enabledModels = [];
      localStorage.setItem('enabledAtlasModels', JSON.stringify(enabledModels));
      updateManageBtnText();
      renderModalList(modalSearch.value);
    });
    
    if(modalSearch) modalSearch.addEventListener("input", e => renderModalList(e.target.value));
    
    // --- END MODEL MANAGER LOGIC ---
