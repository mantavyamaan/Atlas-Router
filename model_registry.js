const ATLAS_MODEL_REGISTRY = [
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 95.96326578853986,
      "math": 93.6791968920996,
      "reasoning": 94.28891609808977
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.985983980248776,
      "general": 0.9633222369300201,
      "legal": 0.99,
      "medical": 0.99
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "GPT-5.5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.1315617653868317,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.022639332484794127,
      "rate_limit_pressure": 0.28718822142477457,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5095,
      "telemetry_freshness_sec": 14
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.99,
      "medical": 0.99,
      "regulated_advice": 0.99
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 96.69767276371356,
      "math": 99.25965060939697,
      "reasoning": 98.90257383275552
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9552930470620191,
      "general": 0.9890258219801562,
      "legal": 1.0,
      "medical": 0.9923345519859653
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "GPT-5.5-Thinking",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.03284748928097714,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.29030683469268725,
      "rate_limit_pressure": 0.20674310081384678,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 20080,
      "telemetry_freshness_sec": 60
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.98,
      "document_qa": 0.98,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9379453646936937,
      "medical": 0.974601887840856,
      "regulated_advice": 0.9744967974257501
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 93.15710485969372,
      "math": 95.20393456233668,
      "reasoning": 93.12853920904254
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9642139500091359,
      "general": 0.9842112972687241,
      "legal": 0.9461443407202896,
      "medical": 0.9279397190554164
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "GPT-5.5-Instant",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.016854522372822034,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2548196576103541,
      "rate_limit_pressure": 0.3233270966542342,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5004,
      "telemetry_freshness_sec": 35
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9366567102975829,
      "medical": 0.9211879482307251,
      "regulated_advice": 0.8672575233452338
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.89229631069223,
      "math": 89.18363154499836,
      "reasoning": 88.0313496321851
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9162342869935922,
      "general": 0.9058079251699992,
      "legal": 0.832069263242462,
      "medical": 0.9237712716965545
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GPT-5.4",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.06029556383328123,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.10373183607697302,
      "rate_limit_pressure": 0.29748750014047487,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1440,
      "telemetry_freshness_sec": 53
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.935455005412219,
      "medical": 0.8527059685840127,
      "regulated_advice": 0.9329683897540809
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.05166515592921,
      "math": 76.03842036225119,
      "reasoning": 74.49813723091519
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7393635817665871,
      "general": 0.7880463140481323,
      "legal": 0.7169614854603747,
      "medical": 0.7860218809509499
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GPT-5.4-Mini",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.008258592729725112,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.19712710512636109,
      "rate_limit_pressure": 0.04990757976683602,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 331,
      "telemetry_freshness_sec": 47
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.918059128147026,
      "medical": 0.8806037705520638,
      "regulated_advice": 0.8600862256644843
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.9854413936671,
      "math": 89.3705284507079,
      "reasoning": 88.25140797029854
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8923046420440479,
      "general": 0.8932713874086179,
      "legal": 0.8391519624522862,
      "medical": 0.8904398368185343
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GPT-5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.04601978580759358,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.25231859561114856,
      "rate_limit_pressure": 0.034639390310269795,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1418,
      "telemetry_freshness_sec": 53
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9472875993586211,
      "medical": 0.9769048135021517,
      "regulated_advice": 0.9419659316545372
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.97865337177433,
      "math": 87.20261329111212,
      "reasoning": 88.89998868910207
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8673392875197447,
      "general": 0.9156248152711486,
      "legal": 0.8496618959398069,
      "medical": 0.8967706728452733
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GPT-4o",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.08659938327819826,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.17103025015542359,
      "rate_limit_pressure": 0.20181642450370751,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1598,
      "telemetry_freshness_sec": 25
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9589026777309791,
      "medical": 0.9573173620026284,
      "regulated_advice": 0.9416246066379886
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.59769953654812,
      "math": 73.90646457353571,
      "reasoning": 75.56500543299212
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7830694413636013,
      "general": 0.7936190322003055,
      "legal": 0.7167548579115066,
      "medical": 0.7147875393053129
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GPT-4o-Mini",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.05015222324306452,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2471512194554713,
      "rate_limit_pressure": 0.22739120140642105,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 324,
      "telemetry_freshness_sec": 24
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9278695783569825,
      "medical": 0.8773582500492448,
      "regulated_advice": 0.9105777524604427
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.77806805693709,
      "math": 95.55080938037965,
      "reasoning": 93.79892614413792
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7697480975563336,
      "general": 0.76425705006667,
      "legal": 0.7664611471777569,
      "medical": 0.7140299959966453
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "o4-Mini",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.13380136151595132,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.15742465448412726,
      "rate_limit_pressure": 0.010269028249449353,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 222,
      "telemetry_freshness_sec": 59
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.85,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9277415381686327,
      "medical": 0.9423945887104974,
      "regulated_advice": 0.908751854809348
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 98.76361406458886,
      "math": 100,
      "reasoning": 100
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9327492160682312,
      "general": 1.0,
      "legal": 0.9886350285868638,
      "medical": 0.9932188611863628
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "o3",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.18865844715924707,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.00015244034254628945,
      "rate_limit_pressure": 0.12451654983402993,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 19947,
      "telemetry_freshness_sec": 42
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 1.0,
      "document_qa": 0.98,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "OpenAI",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9471658300783704,
      "medical": 0.9581417625641112,
      "regulated_advice": 0.8537440161535889
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 97.79198734573723,
      "math": 97.33806386401385,
      "reasoning": 99.86520132411978
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 1.0,
      "finance": 0.9461548189664386,
      "general": 0.9910398970641286,
      "legal": 0.99,
      "medical": 0.99
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Claude-Opus-4.8",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.05974973242992725,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.03990268619556825,
      "rate_limit_pressure": 0.24457010318885028,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 20055,
      "telemetry_freshness_sec": 51
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.98,
      "document_qa": 1.0,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.99,
      "medical": 0.99,
      "regulated_advice": 0.99
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 98.8844013322968,
      "math": 99.52229578069864,
      "reasoning": 99.320764907515
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 1.0,
      "finance": 0.9342802463967982,
      "general": 1.0,
      "legal": 1.0,
      "medical": 0.9359514635672622
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Claude-Opus-4.7",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.10799380992799586,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.14421071964104673,
      "rate_limit_pressure": 0.0794235631026111,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 19907,
      "telemetry_freshness_sec": 25
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.98,
      "document_qa": 1.0,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9227509942911506,
      "medical": 0.9262511602744232,
      "regulated_advice": 0.8791283859258211
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 97.10771983882036,
      "math": 98.22306439464866,
      "reasoning": 99.04148684571322
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 1.0,
      "finance": 1.0,
      "general": 1.0,
      "legal": 1.0,
      "medical": 1.0
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Claude-Opus-4.6",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.11196892275276862,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1054738646519871,
      "rate_limit_pressure": 0.14468280985084356,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 20078,
      "telemetry_freshness_sec": 16
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.98,
      "document_qa": 1.0,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9369812809344455,
      "medical": 0.9254803266160918,
      "regulated_advice": 0.9373762875061875
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 98.37657951326779,
      "math": 98.48999694521402,
      "reasoning": 97.64498438038865
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 1.0,
      "finance": 0.9324862356491324,
      "general": 0.985526426114921,
      "legal": 1.0,
      "medical": 0.9798393604962845
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Claude-Opus-4.5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.13183110944914547,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.19393296951470465,
      "rate_limit_pressure": 0.26446726166990037,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 19996,
      "telemetry_freshness_sec": 19
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.98,
      "document_qa": 1.0,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9359783862688049,
      "medical": 0.9510914833455305,
      "regulated_advice": 0.8723431004253839
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.13372767701024,
      "math": 88.03166810279886,
      "reasoning": 86.36421810312869
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.98,
      "finance": 0.8326237620009775,
      "general": 0.8865805343963654,
      "legal": 0.9738723001880935,
      "medical": 0.8536450481277434
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Claude-Sonnet-4.6",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.043208180409008735,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.29696781564722263,
      "rate_limit_pressure": 0.3004538568569619,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1559,
      "telemetry_freshness_sec": 41
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.98,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9182694313849672,
      "medical": 0.9492158099270949,
      "regulated_advice": 0.9374878285192958
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 93.97470252385776,
      "math": 96.28379136721732,
      "reasoning": 94.47149370970742
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 1.0,
      "finance": 0.945568220009189,
      "general": 0.9821847993834264,
      "legal": 1.0,
      "medical": 0.9989027446079455
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Claude-Sonnet-4.5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.07373995410949795,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.07543562880869839,
      "rate_limit_pressure": 0.13610809264045384,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5069,
      "telemetry_freshness_sec": 45
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 1.0,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9561702626103633,
      "medical": 0.8908193792980256,
      "regulated_advice": 0.921180353251121
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.9978845806462,
      "math": 87.56403060005223,
      "reasoning": 88.10698078692484
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.98,
      "finance": 0.8811324610975481,
      "general": 0.8997370750411765,
      "legal": 0.9706434436708866,
      "medical": 0.8907294324158527
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Claude-Sonnet-4",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.07237455833520567,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.29106544397117395,
      "rate_limit_pressure": 0.018345619775803092,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1564,
      "telemetry_freshness_sec": 30
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.98,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9814520550176608,
      "medical": 0.976092581864074,
      "regulated_advice": 0.8756858203423116
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.23500303332288,
      "math": 76.53658068461728,
      "reasoning": 75.40805200625552
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.85,
      "finance": 0.7508059181417878,
      "general": 0.7937208091776459,
      "legal": 0.8025872351838139,
      "medical": 0.7428457958842287
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Claude-Haiku-4.5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.17620954412395115,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.09796782914814851,
      "rate_limit_pressure": 0.17490884065940754,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 392,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.85,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9332925682874332,
      "medical": 0.9739014863332375,
      "regulated_advice": 0.8721475780988841
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.10203659830549,
      "math": 75.13626761331633,
      "reasoning": 76.58539778207351
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.85,
      "finance": 0.7856381782707916,
      "general": 0.7954672481092989,
      "legal": 0.8042963029566407,
      "medical": 0.7076872864638111
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Claude-Haiku-4",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.06435406273848536,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2644625612081874,
      "rate_limit_pressure": 0.16105483437485596,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 212,
      "telemetry_freshness_sec": 20
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.85,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9145092739016606,
      "medical": 0.9114475750223053,
      "regulated_advice": 0.9251385829394899
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.60423248563762,
      "math": 88.27236537227408,
      "reasoning": 86.16894371797395
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.98,
      "finance": 0.8716747843263792,
      "general": 0.8967963119177186,
      "legal": 0.9521674537939615,
      "medical": 0.9147303268165927
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Claude-3.5-Sonnet",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.0991917656775439,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1796518566359152,
      "rate_limit_pressure": 0.07386510039622221,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1414,
      "telemetry_freshness_sec": 10
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.98,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Anthropic",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9459362856219439,
      "medical": 0.943550492036055,
      "regulated_advice": 0.9473039545656009
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.10233993319211,
      "math": 75.06544131923212,
      "reasoning": 74.06047077462719
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7873610533293748,
      "general": 0.7644088523774374,
      "legal": 0.99,
      "medical": 0.99
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-3.1-Pro",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.08994402609895327,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.26994342516384984,
      "rate_limit_pressure": 0.2235193599890032,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 209,
      "telemetry_freshness_sec": 45
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.99,
      "medical": 0.99,
      "regulated_advice": 0.99
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.66047887792446,
      "math": 74.78975292034642,
      "reasoning": 73.8195880663597
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7068467397717855,
      "general": 0.794591409149718,
      "legal": 0.7690343551669511,
      "medical": 0.714893784750276
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-3-Pro",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.11157186390029557,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.19704526507758544,
      "rate_limit_pressure": 0.17149312770061395,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 218,
      "telemetry_freshness_sec": 60
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.900984957881005,
      "medical": 0.978632144865871,
      "regulated_advice": 0.8845897377551039
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.71441386035372,
      "math": 74.80142951746464,
      "reasoning": 75.0090449368739
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7369095181010057,
      "general": 0.7626243201050454,
      "legal": 0.7629476516060584,
      "medical": 0.7996908671941257
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-3.5-Flash",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.03609634589661934,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.043421933294876834,
      "rate_limit_pressure": 0.3042768186469087,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 211,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.972984681021296,
      "medical": 0.9757346754750971,
      "regulated_advice": 0.8567937616013074
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.22841574854773,
      "math": 74.94071918250594,
      "reasoning": 75.68514553264673
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7419207037390632,
      "general": 0.7695252030129889,
      "legal": 0.7470170321964413,
      "medical": 0.7640777633166537
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-2.5-Pro",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.10224860382972432,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.039127348516843914,
      "rate_limit_pressure": 0.34470309696818224,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 310,
      "telemetry_freshness_sec": 32
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9653039651528066,
      "medical": 0.9481711509267721,
      "regulated_advice": 0.85835596657266
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.94998747921096,
      "math": 76.66926697866795,
      "reasoning": 73.89126125211648
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7819826425983776,
      "general": 0.7851988719723575,
      "legal": 0.7638335993637938,
      "medical": 0.7464170477112394
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-2.5-Flash",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.12186930319288757,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2113952306566092,
      "rate_limit_pressure": 0.19514006339785955,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 329,
      "telemetry_freshness_sec": 47
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.979709191759348,
      "medical": 0.9071925338873349,
      "regulated_advice": 0.9689532055334602
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.49268242624741,
      "math": 73.35487691934584,
      "reasoning": 74.3257566884174
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7969422468404586,
      "general": 0.7894819506902159,
      "legal": 0.7812887341097935,
      "medical": 0.7528305530407647
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-2.0-Pro",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.020255985933710807,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.02157648916892233,
      "rate_limit_pressure": 0.1066876418870415,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 232,
      "telemetry_freshness_sec": 15
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9147308059028808,
      "medical": 0.8592899600142846,
      "regulated_advice": 0.8716723265093783
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.72012271508719,
      "math": 76.87542936345955,
      "reasoning": 74.18414887847665
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "document_qa": 0.9,
      "finance": 0.7310123010542315,
      "general": 0.796268791772123,
      "legal": 0.7781309306668789,
      "medical": 0.7405655869159907
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Gemini-2.0-Flash",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.0882489767938637,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.14756740923300765,
      "rate_limit_pressure": 0.3715071124609631,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 352,
      "telemetry_freshness_sec": 47
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.9,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9123270984546998,
      "medical": 0.9257529928228513,
      "regulated_advice": 0.9669897846408209
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.91397040687372,
      "math": 87.07172300414791,
      "reasoning": 87.65702756334177
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9255633280984948,
      "general": 0.9292273022036118,
      "legal": 0.8553668154726302,
      "medical": 0.8965594951963045
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Gemma-4",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.1606501598438428,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.24059091585278758,
      "rate_limit_pressure": 0.2812372680975175,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1547,
      "telemetry_freshness_sec": 29
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9533588225665873,
      "medical": 0.8530229594851706,
      "regulated_advice": 0.9292018902728924
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.46245302538631,
      "math": 87.77322030416717,
      "reasoning": 86.55915521327358
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.852665288074044,
      "general": 0.8823438841027728,
      "legal": 0.8465285050583369,
      "medical": 0.8885241468582238
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Gemma-3",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.07027151586981069,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.26510069393915503,
      "rate_limit_pressure": 0.3228594719799399,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1584,
      "telemetry_freshness_sec": 28
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Google",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.910160939904956,
      "medical": 0.9110245404410175,
      "regulated_advice": 0.9185710965069449
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 96.91098946464466,
      "math": 94.98858026671564,
      "reasoning": 93.46278813864511
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 1.0,
      "finance": 0.9393245289285685,
      "general": 1.0,
      "legal": 0.9420870373916904,
      "medical": 0.9253972628602389
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Llama-4-Maverick",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.15219545994195915,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.04695230032807141,
      "rate_limit_pressure": 0.23913379509515736,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5054,
      "telemetry_freshness_sec": 42
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9678120808544423,
      "medical": 0.9324958424888647,
      "regulated_advice": 0.9224273560178943
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.25698644107378,
      "math": 86.99459587353532,
      "reasoning": 88.25173457792646
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.98,
      "finance": 0.8623806176669817,
      "general": 1.0,
      "legal": 0.9299476093598795,
      "medical": 0.8427787186789999
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-4-Scout",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.03950182998409646,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.061807521125243556,
      "rate_limit_pressure": 0.20634076154235048,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1527,
      "telemetry_freshness_sec": 32
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9188475149809017,
      "medical": 0.9587786976954153,
      "regulated_advice": 0.853883821773486
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.0187036970433,
      "math": 88.8264051608527,
      "reasoning": 89.65887780034576
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.98,
      "finance": 0.8356410863082758,
      "general": 1.0,
      "legal": 0.8827725697033637,
      "medical": 0.9145465503840909
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.3-70B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.04974524573510786,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.22121896275366115,
      "rate_limit_pressure": 0.3749791263411126,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1572,
      "telemetry_freshness_sec": 10
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9250979885011378,
      "medical": 0.933407281495481,
      "regulated_advice": 0.8648852329623847
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.76764663578817,
      "math": 87.16722961965183,
      "reasoning": 89.51157816931702
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.98,
      "finance": 0.838994971065111,
      "general": 0.9901857405810034,
      "legal": 0.9074021880605752,
      "medical": 0.8965130982251956
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.1-405B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.11644016412069808,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.16508860700968203,
      "rate_limit_pressure": 0.033588911626070896,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1456,
      "telemetry_freshness_sec": 38
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9632264965013208,
      "medical": 0.8597316956797161,
      "regulated_advice": 0.9507222392658164
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.11407585678033,
      "math": 87.44117293731999,
      "reasoning": 87.94424391795903
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.98,
      "finance": 0.8305202080976843,
      "general": 1.0,
      "legal": 0.8829246489846485,
      "medical": 0.8331189324246137
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.1-70B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.14716917967252793,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.15677328389082112,
      "rate_limit_pressure": 0.3799160053231822,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1419,
      "telemetry_freshness_sec": 24
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9157851263119783,
      "medical": 0.9693335723927611,
      "regulated_advice": 0.937161479821362
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.97942695729058,
      "math": 89.28045321489076,
      "reasoning": 89.7969378443767
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.98,
      "finance": 0.8810019284789822,
      "general": 1.0,
      "legal": 0.9073539866309563,
      "medical": 0.912579524904295
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.2-90B-Vision",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.19555237669921177,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.13118989041319287,
      "rate_limit_pressure": 0.2280508659030112,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1586,
      "telemetry_freshness_sec": 49
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9597403774701194,
      "medical": 0.8638472951834978,
      "regulated_advice": 0.8566734853512898
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.22686199269748,
      "math": 73.22722275786798,
      "reasoning": 74.81317156328926
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.85,
      "finance": 0.7141522725078686,
      "general": 0.8603784357675034,
      "legal": 0.7839587061414112,
      "medical": 0.7710362604411949
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.2-11B-Vision",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.018899747367634515,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2744771729133093,
      "rate_limit_pressure": 0.021403239754337246,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 212,
      "telemetry_freshness_sec": 48
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9578910189653282,
      "medical": 0.924451214099535,
      "regulated_advice": 0.9595105363322286
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 76.73231114758678,
      "math": 74.45699660134127,
      "reasoning": 73.3196863952074
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.85,
      "finance": 0.7239972418842073,
      "general": 0.8579842503828277,
      "legal": 0.7073661044691366,
      "medical": 0.7623547258277099
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.2-3B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.015109126137048269,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1655695883594917,
      "rate_limit_pressure": 0.3479977374488241,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 397,
      "telemetry_freshness_sec": 31
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9882650353700289,
      "medical": 0.8519281637589969,
      "regulated_advice": 0.9572098263896328
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 76.33724702191893,
      "math": 76.52214899637026,
      "reasoning": 75.20744568539092
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "chat": 0.85,
      "finance": 0.7305265093516516,
      "general": 0.8730544150739923,
      "legal": 0.7170530715240856,
      "medical": 0.7227539687274591
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Llama-3.2-1B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.13434434844379903,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1730238012237499,
      "rate_limit_pressure": 0.1010359977931469,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 339,
      "telemetry_freshness_sec": 21
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Meta",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9477947394302971,
      "medical": 0.8852926699381591,
      "regulated_advice": 0.9431698651319179
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 96.14424403204738,
      "math": 93.66172574381524,
      "reasoning": 95.33078413291756
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9986682312945986,
      "general": 0.9535726136539427,
      "legal": 0.9823245473636506,
      "medical": 0.9374217250997937
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "DeepSeek-V4-Pro",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.1324174654598395,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.23885097549816703,
      "rate_limit_pressure": 0.13674686020212776,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5087,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "DeepSeek",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9884084710544605,
      "medical": 0.9467394620795274,
      "regulated_advice": 0.8794358156132891
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 96.42104441806595,
      "math": 100,
      "reasoning": 100
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 5000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.984917602653656,
      "general": 0.984274526321594,
      "legal": 0.9358263629299722,
      "medical": 0.940027598977968
    },
    "evaluation": {
      "losses": 20,
      "samples": 1000,
      "wins": 980
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 35000,
      "total_latency_ms_mean": 20000,
      "total_latency_variance": 25000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 4000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "DeepSeek-R1",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.03782404822292016,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.03039744593667748,
      "rate_limit_pressure": 0.2048085963826215,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 19924,
      "telemetry_freshness_sec": 15
    },
    "ops_static": {
      "latency_score": 0.025,
      "reliability": 0.999
    },
    "performance": {
      "coding": 1.0,
      "document_qa": 0.98,
      "human_eval_score": 98.0,
      "mMLU_score": 98.0,
      "summarization": 0.98
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 10.0,
      "output_cost": 30.0,
      "relative_cost_score": 0.5,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "DeepSeek",
    "quality_distribution": {
      "5th_percentile": 0.96355,
      "95th_percentile": 0.99645,
      "mean_score": 0.98,
      "variance": 0.0001
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9134458526507622,
      "medical": 0.9320824227798016,
      "regulated_advice": 0.92826634448269
    },
    "status": "active",
    "tier": "Frontier-Reasoning",
    "verifier_fit": {
      "citation_review": 0.98,
      "consistency_review": 0.98,
      "factuality_review": 0.98,
      "safety_review": 0.98,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.8405004020237,
      "math": 94.82406427914388,
      "reasoning": 96.24229899150963
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7216209933261244,
      "general": 0.7725317123236897,
      "legal": 0.7175058472161007,
      "medical": 0.737690158729629
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "DeepSeek-R1-Distill",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.10199122679867532,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1226749454778601,
      "rate_limit_pressure": 0.11425328195395186,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 327,
      "telemetry_freshness_sec": 12
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.85,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "DeepSeek",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9699008361474086,
      "medical": 0.9394644412453192,
      "regulated_advice": 0.8842739616301355
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.03090989795396,
      "math": 87.2425739416321,
      "reasoning": 87.21209981837227
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8337663947948132,
      "general": 0.8831188397172356,
      "legal": 0.8788963799423432,
      "medical": 0.9047291279237548
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "DeepSeek-V3.2",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.09352577109053468,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.05654710669531253,
      "rate_limit_pressure": 0.09467025929117351,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1582,
      "telemetry_freshness_sec": 25
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "DeepSeek",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9865981682546316,
      "medical": 0.8521651923047893,
      "regulated_advice": 0.9526169805606487
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.23340283622763,
      "math": 86.42829352682571,
      "reasoning": 88.15071597343868
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8600506257066878,
      "general": 0.881500088841873,
      "legal": 0.8777379121982468,
      "medical": 0.8927956645952877
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "DeepSeek-V3",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.0946377470574335,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.19341182573633403,
      "rate_limit_pressure": 0.3669588116253104,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1475,
      "telemetry_freshness_sec": 51
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "DeepSeek",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9880741333492221,
      "medical": 0.9676267399615128,
      "regulated_advice": 0.8525540749451012
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.16261347868989,
      "math": 88.75717221165972,
      "reasoning": 89.44184703866195
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8466687547237689,
      "general": 0.9151636406889114,
      "legal": 0.8772814791202251,
      "medical": 0.9017223817158062
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "DeepSeek-V2.5",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.0011895742470123373,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.03531719688885584,
      "rate_limit_pressure": 0.13260265631449158,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1536,
      "telemetry_freshness_sec": 51
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "DeepSeek",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9081364111803413,
      "medical": 0.8867761620833043,
      "regulated_advice": 0.8639987318122854
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 95.10466132484109,
      "math": 93.61648173908928,
      "reasoning": 96.59902441989811
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9683193304806075,
      "general": 0.9988601894491824,
      "legal": 0.9758382748151203,
      "medical": 0.9434029581762005
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Qwen-3.7-Plus",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.0391701814078268,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.22601191018251576,
      "rate_limit_pressure": 0.19168824207442028,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5068,
      "telemetry_freshness_sec": 11
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9383477627792274,
      "medical": 0.8678360711447539,
      "regulated_advice": 0.8860518985657289
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.53894859647913,
      "math": 88.37912010244895,
      "reasoning": 88.84031130959032
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9096384369372231,
      "general": 0.8872038628034742,
      "legal": 0.8936554330447717,
      "medical": 0.898563004702051
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Qwen-3.5",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.15086680947467426,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.25190309953703754,
      "rate_limit_pressure": 0.2769139911069467,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1490,
      "telemetry_freshness_sec": 22
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9231506457190315,
      "medical": 0.969079688944539,
      "regulated_advice": 0.911839343848488
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.53347817016898,
      "math": 86.88955959213345,
      "reasoning": 88.61284788938582
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8943155934270046,
      "general": 0.9203589708628914,
      "legal": 0.9229589942888268,
      "medical": 0.8493178346674901
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Qwen-3",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.19623895253981605,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.27722949968200705,
      "rate_limit_pressure": 0.314492901864488,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1436,
      "telemetry_freshness_sec": 34
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9740544607904073,
      "medical": 0.9497407062454236,
      "regulated_advice": 0.8749572524565985
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 100,
      "math": 93.88890495558223,
      "reasoning": 93.53534773732966
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9046943772176737,
      "general": 1.0,
      "legal": 0.9472503216612879,
      "medical": 0.9797417202274041
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Qwen-3-Coder",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.01135469511042826,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.11677863049125278,
      "rate_limit_pressure": 0.3000695415708682,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4936,
      "telemetry_freshness_sec": 30
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 1.0,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9197983602236329,
      "medical": 0.8819088518250062,
      "regulated_advice": 0.9507447583629918
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 100,
      "math": 94.57393461105609,
      "reasoning": 95.35621193033762
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9884146044750771,
      "general": 1.0,
      "legal": 0.9832345189609258,
      "medical": 0.974449855757421
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Qwen-2.5-Coder",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.16239773739773553,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1024394444466356,
      "rate_limit_pressure": 0.1832782787013109,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5083,
      "telemetry_freshness_sec": 50
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 1.0,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9793048752140222,
      "medical": 0.9293851737689514,
      "regulated_advice": 0.8829286956058233
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 76.07465450596266,
      "math": 74.94844148365321,
      "reasoning": 74.56846086216551
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7989463234963725,
      "general": 0.758428167174877,
      "legal": 0.7323585620216235,
      "medical": 0.7696122178343215
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Qwen-2.5-72B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.19350310278465407,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.004560051370957751,
      "rate_limit_pressure": 0.35324598274652863,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 357,
      "telemetry_freshness_sec": 13
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9154786081580509,
      "medical": 0.9463712446592291,
      "regulated_advice": 0.8902576738997674
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 76.62857181654229,
      "math": 75.45012515565656,
      "reasoning": 73.31155575557328
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7767071758332549,
      "general": 0.7572120712108928,
      "legal": 0.7115549555639036,
      "medical": 0.7628588435475283
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Qwen-2.5-32B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.11174762171429763,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1296011307235341,
      "rate_limit_pressure": 0.04787838894842831,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 211,
      "telemetry_freshness_sec": 44
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.919995040526355,
      "medical": 0.9253487303386909,
      "regulated_advice": 0.8552198701691307
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.12616336184,
      "math": 75.15291537735509,
      "reasoning": 76.59543121150105
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7359816700991255,
      "general": 0.7519045514411262,
      "legal": 0.7756402951068552,
      "medical": 0.7377634759325998
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Qwen-2.5-7B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.1821510672494156,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.22837435786674726,
      "rate_limit_pressure": 0.3548583345415244,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 279,
      "telemetry_freshness_sec": 43
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Alibaba (Qwen)",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9697216693927155,
      "medical": 0.8516925574816404,
      "regulated_advice": 0.8890287594928937
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 95.96087337135056,
      "math": 95.5399547120009,
      "reasoning": 95.71489923091634
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9475556796922033,
      "general": 0.9814115296681556,
      "legal": 0.9890102112943324,
      "medical": 0.9688822903779264
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Mistral-Large-3",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.058996048272998806,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2508076712523086,
      "rate_limit_pressure": 0.2885397239700254,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5005,
      "telemetry_freshness_sec": 22
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9029076460479987,
      "medical": 0.875057507919978,
      "regulated_advice": 0.9137335375344553
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 93.25860179984242,
      "math": 95.04997800091867,
      "reasoning": 96.98518289982854
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9283356061831622,
      "general": 0.9584156269180066,
      "legal": 0.9230511642649019,
      "medical": 0.9289673368718548
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Mistral-Large-2",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.053696116645900904,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.15712578600510954,
      "rate_limit_pressure": 0.1912753167810072,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5081,
      "telemetry_freshness_sec": 51
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9288657289852316,
      "medical": 0.9107071518939529,
      "regulated_advice": 0.8865154265110906
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.9785532328366,
      "math": 88.88036479895733,
      "reasoning": 89.11745674763968
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8587426353916812,
      "general": 0.9256140576460734,
      "legal": 0.895523048758007,
      "medical": 0.898300510973611
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Mistral-Medium-3.5",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.1641212450453001,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.22833994379973477,
      "rate_limit_pressure": 0.32066972365812113,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1421,
      "telemetry_freshness_sec": 21
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.94223330180151,
      "medical": 0.8700684460334884,
      "regulated_advice": 0.9437471382466206
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.62791592657928,
      "math": 75.03331238423556,
      "reasoning": 76.71212346277756
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7490583079562287,
      "general": 0.7947421420781156,
      "legal": 0.7622812763195435,
      "medical": 0.7697045773709471
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Mistral-Small",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.038112192948058544,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.06781244031707853,
      "rate_limit_pressure": 0.2919548403088137,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 346,
      "telemetry_freshness_sec": 13
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9386052213420356,
      "medical": 0.9204293044291793,
      "regulated_advice": 0.8757532702377315
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 76.93814545111185,
      "math": 75.199404280987,
      "reasoning": 75.4293700405466
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7030286715400966,
      "general": 0.7763805059304695,
      "legal": 0.7914436531761677,
      "medical": 0.7549226036289595
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Mistral-7B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.05080006197834093,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.24219781076414562,
      "rate_limit_pressure": 0.3815789835538923,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 374,
      "telemetry_freshness_sec": 19
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.955684685443447,
      "medical": 0.8989070802036545,
      "regulated_advice": 0.9330198420761511
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.22253092290033,
      "math": 73.46753983721746,
      "reasoning": 75.09283648606319
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7362111678479007,
      "general": 0.7811353686966601,
      "legal": 0.7450347871488388,
      "medical": 0.7770639599507121
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Mixtral-8x22B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.1272260651524413,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.0051628003381505635,
      "rate_limit_pressure": 0.017184712960465864,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 347,
      "telemetry_freshness_sec": 44
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9139712223519669,
      "medical": 0.9341323716413045,
      "regulated_advice": 0.8579130689400307
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.20156299785542,
      "math": 73.34010495808772,
      "reasoning": 73.91277035735165
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7178757437577625,
      "general": 0.7519092143580888,
      "legal": 0.7573698205021101,
      "medical": 0.7912595114875686
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Mixtral-8x7B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.14846391307794854,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.18984260349516283,
      "rate_limit_pressure": 0.2466384012277144,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 371,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9049170528122401,
      "medical": 0.9403059878302764,
      "regulated_advice": 0.8740229181009828
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 100,
      "math": 95.06789951882514,
      "reasoning": 96.86494949163956
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9239601397422462,
      "general": 1.0,
      "legal": 0.96292040084332,
      "medical": 0.954778755803157
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Codestral",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.030483345353851665,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.28937544220005784,
      "rate_limit_pressure": 0.23570843388888807,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5085,
      "telemetry_freshness_sec": 13
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 1.0,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Mistral AI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9753099397018097,
      "medical": 0.9432972003067068,
      "regulated_advice": 0.9379811878927529
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 93.54289799727272,
      "math": 94.67513721178169,
      "reasoning": 96.1635117976743
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9081885246047533,
      "general": 0.9768872257712001,
      "legal": 0.902295934767726,
      "medical": 0.9719496434147609
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Grok-4.3",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.15683932501870856,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.16769627204111248,
      "rate_limit_pressure": 0.10703089590847448,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5098,
      "telemetry_freshness_sec": 39
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "xAI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9779074055833162,
      "medical": 0.9649712839554089,
      "regulated_advice": 0.9793121346415012
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.78759415881952,
      "math": 88.46738808637919,
      "reasoning": 87.11158330305946
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9069236693647834,
      "general": 0.89022667338844,
      "legal": 0.8476634554895581,
      "medical": 0.8849079938441785
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Grok-4",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.030205292101037687,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1175398264117828,
      "rate_limit_pressure": 0.3078285491462051,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1434,
      "telemetry_freshness_sec": 54
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "xAI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9467414351468018,
      "medical": 0.9164999227797648,
      "regulated_advice": 0.8702317708425761
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.51010044136852,
      "math": 87.91994599802277,
      "reasoning": 88.41336883563757
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9048705032189728,
      "general": 0.909661739740949,
      "legal": 0.9023712971370862,
      "medical": 0.8937080940893739
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Grok-3",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.14949425048220608,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.26601062707695877,
      "rate_limit_pressure": 0.2992711364344095,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1550,
      "telemetry_freshness_sec": 28
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "xAI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9595865171154176,
      "medical": 0.8795463518768757,
      "regulated_advice": 0.8567516909051637
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.61921209579775,
      "math": 87.91276959138499,
      "reasoning": 86.10919501638404
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8377385099330548,
      "general": 0.9040494287019217,
      "legal": 0.8530172166000163,
      "medical": 0.8826369013115708
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Grok-2",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.09100919976375438,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.02589044688327916,
      "rate_limit_pressure": 0.2888151423463175,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1406,
      "telemetry_freshness_sec": 56
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "xAI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9016225707321942,
      "medical": 0.9414561904385295,
      "regulated_advice": 0.8608604964775467
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.39141883822083,
      "math": 86.1952766241643,
      "reasoning": 89.3642890368028
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8678296139643485,
      "general": 0.9049289804660916,
      "legal": 0.8977964459893198,
      "medical": 0.8891648864323358
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Phi-4",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.009360757109720707,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.24501353816585936,
      "rate_limit_pressure": 0.16308507817408868,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1499,
      "telemetry_freshness_sec": 15
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Microsoft",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9622827245337061,
      "medical": 0.9508757856281611,
      "regulated_advice": 0.8767908874687075
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.33766093665807,
      "math": 88.48406418717659,
      "reasoning": 88.20222848889
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8342058720572316,
      "general": 0.8880062978280606,
      "legal": 0.8571496192271888,
      "medical": 0.8823239814764161
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Phi-4-Multimodal",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.07724857109438246,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.13195016651656952,
      "rate_limit_pressure": 0.11487706811785309,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1465,
      "telemetry_freshness_sec": 45
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Microsoft",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9022310814966031,
      "medical": 0.883189209140248,
      "regulated_advice": 0.9430102395568986
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.13488088094343,
      "math": 74.80985884592022,
      "reasoning": 74.76659025790282
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7571086383398279,
      "general": 0.7502138771847642,
      "legal": 0.7870355236246015,
      "medical": 0.7158786116049972
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Phi-4-Mini",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.09722382863066331,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.19331748364387555,
      "rate_limit_pressure": 0.055797644814954556,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 234,
      "telemetry_freshness_sec": 40
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Microsoft",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9372323879916231,
      "medical": 0.9557253337701748,
      "regulated_advice": 0.8995204422411345
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.44986779118403,
      "math": 86.05479279299973,
      "reasoning": 87.127827561308
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8594170378453304,
      "general": 0.9132232078970743,
      "legal": 0.8825729648918147,
      "medical": 0.8698626365335689
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Phi-3-Medium",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.06388275616760734,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.10275886536497297,
      "rate_limit_pressure": 0.29725633245698074,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1437,
      "telemetry_freshness_sec": 24
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Microsoft",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9629668727973788,
      "medical": 0.8577298394007559,
      "regulated_advice": 0.9445859789697445
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.63682959642288,
      "math": 74.74330935413303,
      "reasoning": 73.4924930069285
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7451017567917368,
      "general": 0.7801449298611176,
      "legal": 0.7180162705826643,
      "medical": 0.7643188414627513
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Phi-3-Small",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.09661805043506824,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.07816477363705293,
      "rate_limit_pressure": 0.32156836651985476,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 399,
      "telemetry_freshness_sec": 55
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Microsoft",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.914436708444504,
      "medical": 0.9389370567662169,
      "regulated_advice": 0.9042323883013761
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.47753770251667,
      "math": 75.50119678962331,
      "reasoning": 74.09583980625487
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": true
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7162889499813938,
      "general": 0.7933867049135875,
      "legal": 0.7868956161446523,
      "medical": 0.7033955132946745
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Phi-3-Mini",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.11940109754158312,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.015173182554515219,
      "rate_limit_pressure": 0.2714999970191203,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 373,
      "telemetry_freshness_sec": 44
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Microsoft",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9046723838784383,
      "medical": 0.957090450005272,
      "regulated_advice": 0.9514720741179019
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.50307984326402,
      "math": 88.20423913374758,
      "reasoning": 86.27832993367112
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9226242302383287,
      "general": 0.9064006556223951,
      "legal": 0.9158859307397912,
      "medical": 0.834307665778329
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Command-A",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.028218353261007523,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.018614024770406766,
      "rate_limit_pressure": 0.27251015209835683,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1482,
      "telemetry_freshness_sec": 11
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Cohere",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9495847368497385,
      "medical": 0.903206568457847,
      "regulated_advice": 0.8802706893427866
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 93.58969121947202,
      "math": 95.894939156843,
      "reasoning": 96.31934469558304
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9671249740372336,
      "general": 0.9723403742807717,
      "legal": 0.9697951680157996,
      "medical": 0.9635722792043196
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Command-R-Plus",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.12486280907004295,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.22101741629721303,
      "rate_limit_pressure": 0.228105502145855,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5084,
      "telemetry_freshness_sec": 37
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Cohere",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9787417387341543,
      "medical": 0.9077758437514051,
      "regulated_advice": 0.972517903595078
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.06394784660024,
      "math": 88.72387988064648,
      "reasoning": 86.29253251279023
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8866021261087575,
      "general": 0.8892034246790859,
      "legal": 0.8452031905042409,
      "medical": 0.9070922901401541
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Command-R",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.08666237467673299,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.10424241779195376,
      "rate_limit_pressure": 0.07687494617771594,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1456,
      "telemetry_freshness_sec": 30
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Cohere",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9416410891283041,
      "medical": 0.9371316149389407,
      "regulated_advice": 0.9194031312246868
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 100,
      "math": 95.63884383020512,
      "reasoning": 95.67834365360741
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9167974378502451,
      "general": 1.0,
      "legal": 0.9251575855236935,
      "medical": 0.9815105265949186
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Kimi-K2.7-Code",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.08450622623340948,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.07548507029398631,
      "rate_limit_pressure": 0.24258049922751335,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4962,
      "telemetry_freshness_sec": 36
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 1.0,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Moonshot AI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9472469586580712,
      "medical": 0.91921797635693,
      "regulated_advice": 0.8882307303290895
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.99049898455439,
      "math": 89.89064641262918,
      "reasoning": 86.94474525874104
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8832992881341646,
      "general": 0.9239177598953814,
      "legal": 0.8861467188205203,
      "medical": 0.9084861684380598
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Kimi-K2.5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.02251425700570351,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.29359304657093677,
      "rate_limit_pressure": 0.22908976635537465,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1599,
      "telemetry_freshness_sec": 47
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Moonshot AI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9584879142212391,
      "medical": 0.9214126656255275,
      "regulated_advice": 0.9015535007982828
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.86821989181898,
      "math": 87.83469481286463,
      "reasoning": 87.6533468531475
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8560255512251999,
      "general": 0.9257251605529144,
      "legal": 0.914250008470034,
      "medical": 0.9193022129023497
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Kimi-K2",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.15557120352616838,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.271604117229001,
      "rate_limit_pressure": 0.32993324951850267,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1415,
      "telemetry_freshness_sec": 47
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Moonshot AI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9100672860732152,
      "medical": 0.9231963213037557,
      "regulated_advice": 0.9172751620437771
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.95879574453946,
      "math": 87.54595376704552,
      "reasoning": 87.31740549191872
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8739391444676744,
      "general": 0.9009813971522199,
      "legal": 0.8641987451943471,
      "medical": 0.888185043001743
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Kimi-K1",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.021564067215444373,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2223506471703408,
      "rate_limit_pressure": 0.027736777795523616,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1411,
      "telemetry_freshness_sec": 28
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Moonshot AI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9777824281044645,
      "medical": 0.8651514461388474,
      "regulated_advice": 0.9194445516492753
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.91473045812239,
      "math": 86.3141399127649,
      "reasoning": 86.04384721909436
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8334910560090018,
      "general": 0.8914427968550872,
      "legal": 0.8656021099691728,
      "medical": 0.8934975650353545
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GLM-5.2",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.041690409480106674,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.18773584982423644,
      "rate_limit_pressure": 0.09852189972827348,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1473,
      "telemetry_freshness_sec": 53
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Z.ai / GLM",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9719737783954956,
      "medical": 0.8515532362687565,
      "regulated_advice": 0.875984080378989
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.55380979501169,
      "math": 89.41834598871512,
      "reasoning": 87.68512961005499
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8624227039867817,
      "general": 0.9268649487223439,
      "legal": 0.8719908536760556,
      "medical": 0.8968133624254906
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GLM-5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.16516031279377943,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.05798208588806005,
      "rate_limit_pressure": 0.08600160850210653,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1468,
      "telemetry_freshness_sec": 45
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Z.ai / GLM",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9678955066625681,
      "medical": 0.9016872322295447,
      "regulated_advice": 0.9569833400885116
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 96.73262078414251,
      "math": 96.84567704164466,
      "reasoning": 93.97893885059217
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9381566673258209,
      "general": 0.9629155564871222,
      "legal": 0.9473795876818827,
      "medical": 0.9059066350754759
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "GLM-4-Plus",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.0934169048554706,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.20273196854696265,
      "rate_limit_pressure": 0.13449624003278848,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 5093,
      "telemetry_freshness_sec": 42
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Z.ai / GLM",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9204879924830691,
      "medical": 0.9257220634843494,
      "regulated_advice": 0.9602093992796392
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.10527447247135,
      "math": 76.45309346356102,
      "reasoning": 75.44917180398258
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7816466488491536,
      "general": 0.7830811880918692,
      "legal": 0.7109610306189882,
      "medical": 0.7827639748518336
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GLM-4-Air",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.021665656293068672,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.04400551819382909,
      "rate_limit_pressure": 0.11557674063640194,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 281,
      "telemetry_freshness_sec": 53
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Z.ai / GLM",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9273308020533791,
      "medical": 0.8574169275813819,
      "regulated_advice": 0.9543705636915787
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 88.34357135551897,
      "math": 89.63834623139361,
      "reasoning": 86.8320473201618
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8746590479301719,
      "general": 0.8915216280645318,
      "legal": 0.8532951534474376,
      "medical": 0.845699175254753
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "GLM-4",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.006682506917507114,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.11398178660251976,
      "rate_limit_pressure": 0.01139920623349462,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1437,
      "telemetry_freshness_sec": 10
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Z.ai / GLM",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9346522880737614,
      "medical": 0.8669721265592514,
      "regulated_advice": 0.9479223049241196
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 94.75012157690246,
      "math": 93.07270715051948,
      "reasoning": 96.03068022973277
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9363823045800728,
      "general": 0.9683145614623948,
      "legal": 0.9184687879265482,
      "medical": 0.9830231056115886
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Nemotron-Ultra",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.18393710069304509,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.25359471471307793,
      "rate_limit_pressure": 0.2666881219348444,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4924,
      "telemetry_freshness_sec": 40
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "NVIDIA",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.908356387552211,
      "medical": 0.8648274830449815,
      "regulated_advice": 0.968412072035645
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.2364878155586,
      "math": 87.16771045824099,
      "reasoning": 88.19249410274267
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.830145915805494,
      "general": 0.9246102569917763,
      "legal": 0.9190776845741401,
      "medical": 0.8629155762370071
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Nemotron-70B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.09748309468967858,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.11754024100797006,
      "rate_limit_pressure": 0.3111518755667852,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1569,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "NVIDIA",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9202674830144849,
      "medical": 0.9254663776020804,
      "regulated_advice": 0.8979277180802272
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.03981067180759,
      "math": 86.77339072966895,
      "reasoning": 89.45116264800943
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8961070216847609,
      "general": 0.9277592224534691,
      "legal": 0.8358013058107631,
      "medical": 0.9213822635009816
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Nemotron-4",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.061148876068467375,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.05348085374606645,
      "rate_limit_pressure": 0.3871467202926283,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1474,
      "telemetry_freshness_sec": 29
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "NVIDIA",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9212450115157602,
      "medical": 0.865315835477878,
      "regulated_advice": 0.9657282617719993
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.81576097256709,
      "math": 89.12612765421844,
      "reasoning": 87.50945909918863
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8892598554388905,
      "general": 0.8926543134214835,
      "legal": 0.8423153119369531,
      "medical": 0.8419420004781261
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Nova-Premier",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.11926008872964572,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.0885672175719835,
      "rate_limit_pressure": 0.331820648621015,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1587,
      "telemetry_freshness_sec": 25
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Amazon",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9881893877040864,
      "medical": 0.8890717512553417,
      "regulated_advice": 0.9170260059252556
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 94.88564226032626,
      "math": 94.82755247586456,
      "reasoning": 96.1570512082769
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9895542709284619,
      "general": 0.9904084042960561,
      "legal": 0.9411838376242915,
      "medical": 0.966849168825063
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Nova-Pro",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.09997169670750934,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2585970711833154,
      "rate_limit_pressure": 0.09685185943474495,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4994,
      "telemetry_freshness_sec": 15
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Amazon",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9218777386096698,
      "medical": 0.9314482038209608,
      "regulated_advice": 0.9020763031979453
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 74.57857014634378,
      "math": 73.66152063187276,
      "reasoning": 73.13834543385374
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7624344115558009,
      "general": 0.7958193312652522,
      "legal": 0.7147664460140288,
      "medical": 0.7799237226822912
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Nova-Lite",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.0037119718153632466,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2390042655940324,
      "rate_limit_pressure": 0.07916431588930646,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 380,
      "telemetry_freshness_sec": 60
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Amazon",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9853307363802846,
      "medical": 0.9108881126983862,
      "regulated_advice": 0.933710586709874
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.69919306676267,
      "math": 76.43908712159272,
      "reasoning": 74.27582869955378
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7090619637528747,
      "general": 0.7989111771295081,
      "legal": 0.7118551221250204,
      "medical": 0.7809534526168986
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Nova-Micro",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.15975429800476465,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.14925703947824218,
      "rate_limit_pressure": 0.006497982366178246,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 326,
      "telemetry_freshness_sec": 26
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Amazon",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9735526884987724,
      "medical": 0.9472028659664721,
      "regulated_advice": 0.8930902780335906
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 89.65977628327204,
      "math": 89.9526929150386,
      "reasoning": 88.18593060425438
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8997988299816667,
      "general": 0.8947420918017088,
      "legal": 0.8539204770111337,
      "medical": 0.8502049250726011
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Granite-3.5",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.1296997691884648,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.10340227688808114,
      "rate_limit_pressure": 0.05318127037808904,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1445,
      "telemetry_freshness_sec": 49
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "IBM",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9020891455523546,
      "medical": 0.8660254660934223,
      "regulated_advice": 0.8890422930363121
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.77603879949031,
      "math": 86.47739913979864,
      "reasoning": 89.43006989519598
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8956331680091341,
      "general": 0.9162516390681191,
      "legal": 0.8549896824657093,
      "medical": 0.8467493261554957
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Granite-3",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.18749082678570161,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.04986975372513913,
      "rate_limit_pressure": 0.046038753263915225,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1432,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "IBM",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9171189009937454,
      "medical": 0.8723794498013471,
      "regulated_advice": 0.9139274205695095
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 93.67814191652529,
      "math": 95.68841286958236,
      "reasoning": 96.0464737682408
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9399967937882923,
      "general": 0.9816657723364369,
      "legal": 0.9899495762906932,
      "medical": 0.9878806815390302
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Jamba-Large",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.17279904316736427,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.0020877807171843844,
      "rate_limit_pressure": 0.21813501960425682,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4986,
      "telemetry_freshness_sec": 43
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "AI21",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9735823404013453,
      "medical": 0.8904886075279885,
      "regulated_advice": 0.9620730627200487
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.05643054322553,
      "math": 74.83785573349392,
      "reasoning": 74.15591936134531
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7811095854725223,
      "general": 0.7586869043203963,
      "legal": 0.7506395514037502,
      "medical": 0.7170761002442978
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Jamba-Mini",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.16502084796242592,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.280665849769799,
      "rate_limit_pressure": 0.24993665646205507,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 312,
      "telemetry_freshness_sec": 42
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "AI21",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9218512510478347,
      "medical": 0.8987216736446747,
      "regulated_advice": 0.8662244841613209
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 94.01098357660327,
      "math": 93.61565838270785,
      "reasoning": 96.04763208389333
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.923521807965444,
      "general": 0.9522016153172017,
      "legal": 0.9958460303264309,
      "medical": 0.995604936717683
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "Yi-Large",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.13840270978415112,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.10556454645568389,
      "rate_limit_pressure": 0.30263619177959017,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4968,
      "telemetry_freshness_sec": 36
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "01.AI",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9614963471998144,
      "medical": 0.9749950857464786,
      "regulated_advice": 0.9669799902543146
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 76.99270724641629,
      "math": 76.55675612556705,
      "reasoning": 76.57884683661408
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7928750219784633,
      "general": 0.760660971401603,
      "legal": 0.7638104633088126,
      "medical": 0.7546129785896611
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Yi-Lightning",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.14932363737910767,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.20631370526581422,
      "rate_limit_pressure": 0.32368497011340763,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 363,
      "telemetry_freshness_sec": 29
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "01.AI",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9426328904751959,
      "medical": 0.9244094173530606,
      "regulated_advice": 0.9794591178667134
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 86.28116316256796,
      "math": 89.20905747559729,
      "reasoning": 86.92494297340913
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8932213835110496,
      "general": 0.9241484979924246,
      "legal": 0.8755887545903858,
      "medical": 0.8807521576227383
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "Yi-34B",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.11149569489939067,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.2602248569998721,
      "rate_limit_pressure": 0.04938783187584886,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1445,
      "telemetry_freshness_sec": 11
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "01.AI",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9699976770448742,
      "medical": 0.9670333654360588,
      "regulated_advice": 0.9042100019017995
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.8686546453229,
      "math": 74.8971228159718,
      "reasoning": 76.0925191991434
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.779025654865909,
      "general": 0.7564662441275074,
      "legal": 0.7726133301156635,
      "medical": 0.7683953672303963
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "MiniMax-M3",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.05231687928659079,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.03997596752926014,
      "rate_limit_pressure": 0.025891021678746996,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 384,
      "telemetry_freshness_sec": 52
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "MiniMax",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9457193856922466,
      "medical": 0.890872812216806,
      "regulated_advice": 0.9621523372022537
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 73.73152240507181,
      "math": 73.92658530383926,
      "reasoning": 76.394777779699
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7944953979302146,
      "general": 0.7727725628804889,
      "legal": 0.7027076343339111,
      "medical": 0.7676561184016731
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "MiniMax-M2",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.030046691843834173,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1549944926457518,
      "rate_limit_pressure": 0.3643830461456514,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 251,
      "telemetry_freshness_sec": 22
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "MiniMax",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9013025066556569,
      "medical": 0.8523077521373293,
      "regulated_advice": 0.8978444762462356
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 75.84009568119407,
      "math": 75.85554005636561,
      "reasoning": 75.2789330535865
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 32768,
      "window": 1000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.7461459160575054,
      "general": 0.766071566672473,
      "legal": 0.7679525890500244,
      "medical": 0.7585478971223382
    },
    "evaluation": {
      "losses": 250,
      "samples": 1000,
      "wins": 750
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 600,
      "total_latency_ms_mean": 300,
      "total_latency_variance": 10000,
      "tpot_ms_mean": 10.0,
      "ttft_ms_mean": 60.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "MiniMax-M1",
    "open_weight": true,
    "ops_dynamic": {
      "budget_pressure": 0.02159949786390114,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.12357051594887503,
      "rate_limit_pressure": 0.36128445033430595,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 232,
      "telemetry_freshness_sec": 26
    },
    "ops_static": {
      "latency_score": 1.0,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.75,
      "document_qa": 0.75,
      "human_eval_score": 75.0,
      "mMLU_score": 75.0,
      "summarization": 0.75
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.05,
      "output_cost": 0.15,
      "relative_cost_score": 0.9975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "MiniMax",
    "quality_distribution": {
      "5th_percentile": 0.6184000000000001,
      "95th_percentile": 0.8815999999999999,
      "mean_score": 0.75,
      "variance": 0.0064
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9786588632994192,
      "medical": 0.970950639968726,
      "regulated_advice": 0.8709591284401313
    },
    "status": "active",
    "tier": "Efficient",
    "verifier_fit": {
      "citation_review": 0.75,
      "consistency_review": 0.75,
      "factuality_review": 0.75,
      "safety_review": 0.75,
      "schema_validation": 0.8
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 95.09072492352183,
      "math": 96.1923879467602,
      "reasoning": 93.55742290415374
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 10000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.9590350636834724,
      "general": 0.9534110822947814,
      "legal": 0.934146369409954,
      "medical": 0.9559014706535007
    },
    "evaluation": {
      "losses": 50,
      "samples": 1000,
      "wins": 950
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 8000,
      "total_latency_ms_mean": 5000,
      "total_latency_variance": 1000000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 1000.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": true,
      "image": true,
      "pdf": true,
      "text": true,
      "video": true
    },
    "name": "ERNIE-4.5",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.16704769713231438,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.1739150443571704,
      "rate_limit_pressure": 0.393128286244081,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 4980,
      "telemetry_freshness_sec": 35
    },
    "ops_static": {
      "latency_score": 0.1,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.95,
      "document_qa": 0.95,
      "human_eval_score": 95.0,
      "mMLU_score": 95.0,
      "summarization": 0.95
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 4.0,
      "output_cost": 12.0,
      "relative_cost_score": 0.8,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Baidu",
    "quality_distribution": {
      "5th_percentile": 0.9170999999999999,
      "95th_percentile": 0.9829,
      "mean_score": 0.95,
      "variance": 0.0004
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9009319689942517,
      "medical": 0.9737992315108008,
      "regulated_advice": 0.9442734152788365
    },
    "status": "active",
    "tier": "Frontier",
    "verifier_fit": {
      "citation_review": 0.95,
      "consistency_review": 0.95,
      "factuality_review": 0.95,
      "safety_review": 0.95,
      "schema_validation": 1.0
    },
    "version": "2026.1"
  },
  {
    "allowed_regions": [
      "global",
      "us-east",
      "eu-west",
      "ap-south"
    ],
    "api_available": true,
    "benchmarks": {
      "coding": 87.17901524385027,
      "math": 87.7922318970138,
      "reasoning": 87.1639052502559
    },
    "capabilities": {
      "citation_support": true,
      "function_calling": true,
      "json_mode": true,
      "ocr": true,
      "web_search": false
    },
    "context": {
      "max_output_tokens": 128000,
      "window": 2000000
    },
    "data_residency_tags": [
      "global"
    ],
    "domains": {
      "finance": 0.8575796785826424,
      "general": 0.9174605593288591,
      "legal": 0.908063102110024,
      "medical": 0.8464815867069798
    },
    "evaluation": {
      "losses": 120,
      "samples": 1000,
      "wins": 880
    },
    "family": "LLM",
    "latency_profile": {
      "p99_latency_ms": 2400,
      "total_latency_ms_mean": 1500,
      "total_latency_variance": 90000,
      "tpot_ms_mean": 30.0,
      "ttft_ms_mean": 300.0,
      "ttft_ms": 80,
      "tokens_per_sec": 120
    },
    "modalities": {
      "audio": false,
      "image": true,
      "pdf": true,
      "text": true,
      "video": false
    },
    "name": "ERNIE-X1",
    "open_weight": false,
    "ops_dynamic": {
      "budget_pressure": 0.1108430944157125,
      "current_availability": 0.999,
      "incident_status": "green",
      "queue_pressure": 0.13951110322231883,
      "rate_limit_pressure": 0.23277942057905446,
      "recent_failure_rate": 0.001,
      "recent_latency_ms": 1545,
      "telemetry_freshness_sec": 59
    },
    "ops_static": {
      "latency_score": 0.3333333333333333,
      "reliability": 0.999
    },
    "performance": {
      "coding": 0.88,
      "document_qa": 0.88,
      "human_eval_score": 88.0,
      "mMLU_score": 88.0,
      "summarization": 0.88
    },
    "pricing": {
      "currency": "USD / 1M Tokens",
      "input_cost": 0.5,
      "output_cost": 1.5,
      "relative_cost_score": 0.975,
      "input_1m": 0.05,
      "output_1m": 0.2
    },
    "priors": {
      "global": {
        "alpha": 1.0,
        "beta": 1.0
      },
      "task_family": {}
    },
    "provider": "Baidu",
    "quality_distribution": {
      "5th_percentile": 0.8142,
      "95th_percentile": 0.9458,
      "mean_score": 0.88,
      "variance": 0.0016
    },
    "release_year": 2026,
    "routing": {
      "avoid_for": []
    },
    "safety": {
      "general": 0.9581244689532543,
      "medical": 0.8759846117334456,
      "regulated_advice": 0.9160425395516342
    },
    "status": "active",
    "tier": "Standard",
    "verifier_fit": {
      "citation_review": 0.88,
      "consistency_review": 0.88,
      "factuality_review": 0.88,
      "safety_review": 0.88,
      "schema_validation": 0.93
    },
    "version": "2026.1"
  }
];
