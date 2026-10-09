window.__ModuleLoader__.load({
	id: "dsh-theme-cyberpunk2077",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

		// ════════════════════════════════════════════════════════════════
		// CYBERPUNK 2077 — NIGHT CITY theme for DeepSeek Harness Web UI.
		// Token layer + full identity layer: chamfered chrome, glitch, CRT,
		// HUD states, shard sessions, typewriter + message SFX, boot intro,
		// relic interference, DECK control panel, easter eggs — plus the v2
		// pass: Kiroshi lock-on hover, combat state (stamina bar + NC loading
		// tips), slang chips, NC wall clock, hex data-stream, Johnny takeover,
		// hazard tape, EXECUTE RGB split, mobile/reduced-motion guards.
		// ════════════════════════════════════════════════════════════════
		const TOKENS = {
			// surfaces — deep night blue-black
			"--dsw-alias-bg-base": "#05070d",
			"--dsw-alias-bg-layer-1": "#0a0e18",
			"--dsw-alias-bg-layer-2": "#0d1322",
			"--dsw-alias-bg-layer-3": "#121a2c",
			"--dsw-alias-bg-overlay": "#141c30",
			"--dsw-alias-bg-module-platform": "#0a101d",
			"--dsw-alias-bg-multi-select": "#11182a",
			"--dsw-alias-bg-skeleton": "rgba(0, 240, 255, 0.07)",
			"--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.72)",
			"--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.4)",
			"--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.72)",
			"--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.9)",
			"--dsw-alias-bg-mask-drop": "rgba(5, 7, 13, 0.72)",

			// labels
			"--dsw-alias-label-primary": "#e8f1ff",
			"--dsw-alias-label-secondary": "#9fb2d6",
			"--dsw-alias-label-tertiary": "#6e80a6",
			"--dsw-alias-label-caption": "#8fa3c8",
			"--dsw-alias-label-dimmed": "#5a6b8c",
			"--dsw-alias-label-primary-bluish": "#e8f1ff",
			"--dsw-alias-label-primary-dimmed": "#d8e6ff",
			"--dsw-alias-label-primary-foreground": "#0a0f18",
			"--dsw-alias-label-primary-inverted": "#0a0f18",

			// brand — the Cyberpunk 2077 yellow
			"--dsw-alias-brand-primary": "#fce300",
			"--dsw-alias-brand-text": "#fce300",
			"--dsw-alias-brand-primary-invert": "#141200",
			"--dsw-alias-brand-primary-new-colorprimary-new-color": "#00f0ff",

			// buttons
			"--dsw-alias-button-primary-fill": "#fce300",
			"--dsw-alias-button-primary-hover": "#fcee0a",
			"--dsw-alias-button-primary-dimmed": "rgba(252, 227, 0, 0.12)",
			"--dsw-alias-button-contrast-fill": "#e8f1ff",
			"--dsw-alias-button-elevated-fill": "#101624",
			"--dsw-alias-button-floating-fill": "#0d1322",
			"--dsw-alias-button-floating-hover": "#141c30",
			"--dsw-alias-button-ghost-active-fill": "#101a2c",
			"--dsw-alias-button-ghost-active-hover": "#162035",
			"--dsw-alias-button-info-fill": "#00c2d9",
			"--dsw-alias-button-info-hover": "#00f0ff",
			"--dsw-alias-button-tool-bar-fill-invisible": "rgba(0, 240, 255, 0.08)",
			"--dsw-alias-button-tool-bar-fill": "rgba(0, 240, 255, 0.14)",
			"--dsw-alias-button-tool-bar-hover": "rgba(0, 240, 255, 0.22)",
			"--dsw-alias-button-ghost-active-border": "#00f0ff",

			// interactive
			"--dsw-alias-interactive-bg-hover": "rgba(0, 240, 255, 0.09)",
			"--dsw-alias-interactive-bg-active": "rgba(0, 240, 255, 0.15)",
			"--dsw-alias-interactive-bg-hover-accent": "rgba(252, 227, 0, 0.14)",
			"--dsw-alias-interactive-bg-hover-danger": "rgba(255, 0, 60, 0.14)",
			"--dsw-alias-interactive-bg-hover-solid": "#141c2b",

			// borders
			"--dsw-alias-border-l1": "rgba(0, 240, 255, 0.12)",
			"--dsw-alias-border-l2": "rgba(0, 240, 255, 0.20)",
			"--dsw-alias-border-l2-darkmode-thin": "rgba(0, 240, 255, 0.10)",
			"--dsw-alias-border-l3": "rgba(252, 227, 0, 0.22)",
			"--dsw-alias-border-l4": "rgba(0, 240, 255, 0.34)",
			"--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.10)",
			"--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.14)",

			// state
			"--dsw-alias-state-business-primary": "#00f0ff",
			"--dsw-alias-state-business-tertiary": "#0c2a3d",
			"--dsw-alias-state-error-primary": "#ff003c",
			"--dsw-alias-state-error-secondary": "#ff3b69",
			"--dsw-alias-state-success-primary": "#00f5a0",
			"--dsw-alias-state-success-secondary": "#3dffbe",
			"--dsw-alias-state-success-tertiary": "#07301f",
			"--dsw-alias-state-warn-label": "#ffc94d",
			"--dsw-alias-state-warn-primary": "#ffb300",
			"--dsw-alias-state-warn-secondary": "#ffc94d",
			"--dsw-alias-state-warn-tertiary": "#3a2a00",

			// markdown / code
			"--dsw-alias-markdown-code-block": "#060a12",
			"--dsw-alias-markdown-code-block-banner": "#0a0f1c",
			"--dsw-alias-markdown-inline-code": "#12202f",
			"--dsw-alias-markdown-placeholder": "#0e141f",
			"--dsw-alias-markdown-tag": "#0f1a2b",
			"--dsw-alias-markdown-citation": "#0e1626",
			"--dsw-alias-markdown-code-segment-selected": "#10182a",
			"--dsw-alias-markdown-code-segment-unselected": "#0a0f18",

			// scrollbar — neon yellow
			"--dsw-alias-scrollbar-bg-l1": "rgba(252, 227, 0, 0.26)",
			"--dsw-alias-scrollbar-bg-l2": "rgba(252, 227, 0, 0.32)",
			"--dsw-alias-scrollbar-hover-l1": "rgba(252, 227, 0, 0.48)",
			"--dsw-alias-scrollbar-hover-l2": "rgba(252, 227, 0, 0.55)",

			// toast / tooltip
			"--dsw-alias-toast-bg": "#0d1322",
			"--dsw-alias-tooltip-bg": "#141c30",

			// specific surfaces
			"--dsw-specific-bubble": "#0a0f1c",
			"--dsw-specific-bubble-highlight": "#12222e",
			"--dsw-specific-input-major": "#070b12",
			"--dsw-specific-login-input": "#060a11",
			"--dsw-specific-menu": "#121a2c",
			"--dsw-specific-selector": "#0d1322",
			"--dsw-specific-tip": "#0d1424",
			"--dsw-specific-sidebar-fill": "#060a11",
			"--dsw-specific-sidebar-nav-item-active": "#101826",
			"--dsw-specific-sidebar-nav-item-active-accent": "#fce300",
			"--dsw-specific-sidebar-nav-item-hover": "#0f1522",

			// statics
			"--dsw-static-neutral-bluish-00": "#05070d",
			"--dsw-static-neutral-bluish-1000": "#e8f1ff",
			"--dsw-static-neutral-bluish-100": "#0a0e18",
			"--dsw-static-neutral-bluish-200": "#0d1322",
			"--dsw-static-neutral-bluish-300": "#121a2c",
			"--dsw-static-neutral-bluish-400": "#9fb2d6",
			"--dsw-static-neutral-bluish-50": "#0a0e18",
			"--dsw-static-neutral-bluish-500": "#6e80a6",
			"--dsw-static-neutral-bluish-600": "#5a6b8c",
			"--dsw-static-neutral-bluish-700": "#3a4a68",
			"--dsw-static-neutral-bluish-750": "#24324c",
			"--dsw-static-neutral-bluish-75": "#0d1322",
			"--dsw-static-neutral-bluish-800": "#1a2234",
			"--dsw-static-neutral-bluish-850": "#111827",
			"--dsw-static-neutral-bluish-875": "#0d121d",
			"--dsw-static-neutral-bluish-900": "#090d16",
			"--dsw-static-neutral-bluish-950": "#060910",
			"--dsw-static-neutral-bluish-60": "#0a0f18",

			"--dsw-static-deepseek-400": "#00f0ff",
			"--dsw-static-deepseek-450": "#00cfe8",
			"--dsw-static-deepseek-500": "#00c2d9",
			"--dsw-static-deepseek-600": "#0f7da8",
			"--dsw-static-deepseek-700-delete": "#0b4a66",
			"--dsw-static-deepseek-800": "#0a3548",
			"--dsw-static-deepseek-900": "#092433",
			"--dsw-static-deepseek-100": "#12293a",
			"--dsw-static-deepseek-200": "#0f2d42",
			"--dsw-static-deepseek-300": "#0d3550",
			"--dsw-static-deepseek-50": "#0a1526",

			"--dsw-static-blue-400": "#00f0ff",
			"--dsw-static-blue-450": "#00cfe8",
			"--dsw-static-blue-500": "#00b3c9",
			"--dsw-static-blue-600": "#0f7da8",
			"--dsw-static-blue-800": "#0b4a66",
			"--dsw-static-blue-900": "#0a3548",
			"--dsw-static-blue-950": "#092433",
			"--dsw-static-blue-100": "#12263d",
			"--dsw-static-blue-300": "#2bd9f0",
			"--dsw-static-blue-50": "#0a1526",
			"--dsw-static-blue-75": "#0e1c30",
			"--dsw-static-blue-50p": "#0a1a2e",

			"--dsw-static-green-400": "#3dffbe",
			"--dsw-static-green-500": "#00f5a0",
			"--dsw-static-green-100": "#07301f",
			"--dsw-static-green-900": "#043524",

			"--dsw-static-red-400": "#ff3b69",
			"--dsw-static-red-500": "#ff003c",
			"--dsw-static-red-600": "#ff003c",
			"--dsw-static-red-100": "#3a1020",
			"--dsw-static-red-50": "#2b0e1a",
			"--dsw-static-red-900": "#4b0d1c",

			"--dsw-static-amber-400": "#ffc94d",
			"--dsw-static-amber-500": "#ffb300",
			"--dsw-static-amber-600": "#ff9f00",
			"--dsw-static-amber-100": "#3a2a00",
			"--dsw-static-amber-900": "#2b1f00"
		};

		const THEME_ID = "cyberpunk2077";

		// ── config (persisted in localStorage under one key) ───────────────
		const CFG_KEY = "cp2077-cfg";
		const CFG_DEFAULTS = { scan: true, relic: true, boot: true, type: true, sfx: true };
		let cfg = { ...CFG_DEFAULTS };
		function loadCfg() {
			try {
				const raw = localStorage.getItem(CFG_KEY);
				if (raw !== null) cfg = { ...CFG_DEFAULTS, ...JSON.parse(raw) };
			} catch {}
		}
		function saveCfg() {
			try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch {}
		}
		// Effects gate on body classes so CSS can switch them off cheaply.
		function applyCfgToBody() {
			const b = document.body;
			if (b === undefined || b === null) return;
			b.classList.toggle("cp-off-scan", !cfg.scan);
			b.classList.toggle("cp-off-relic", !cfg.relic);
			b.classList.toggle("cp-off-sfx", !cfg.sfx);
		}

		// ── sound engine (Web Audio; everything synthesized, no assets) ────
		let audioCtx = null;
		let noiseBuf = null;
		function ensureAudio() {
			const AC = window.AudioContext || window.webkitAudioContext;
			if (AC === undefined) return null;
			if (audioCtx === null) audioCtx = new AC();
			if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
			return audioCtx;
		}
		function noiseBuffer(ctx) {
			if (noiseBuf !== null) return noiseBuf;
			const len = Math.floor(ctx.sampleRate * 0.06);
			const buf = ctx.createBuffer(1, len, ctx.sampleRate);
			const data = buf.getChannelData(0);
			for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
			noiseBuf = buf;
			return buf;
		}
		// One key click: noise transient + pitch-drop body.
		function playKeyClick(key) {
			if (!cfg.type) return;
			const ctx = ensureAudio();
			if (ctx === null || ctx.state !== "running") return;
			const t = ctx.currentTime;
			const src = ctx.createBufferSource();
			src.buffer = noiseBuffer(ctx);
			const bp = ctx.createBiquadFilter();
			bp.type = "bandpass";
			const base = key === " " ? 1300 : key === "Enter" ? 1000 : 1900;
			bp.frequency.value = base + Math.random() * 900;
			bp.Q.value = 1.1;
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(0.1 + Math.random() * 0.05, t + 0.002);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
			src.connect(bp); bp.connect(g); g.connect(ctx.destination);
			src.start(t); src.stop(t + 0.07);
			const osc = ctx.createOscillator();
			osc.type = "triangle";
			const f0 = key === "Enter" ? 190 : key === " " ? 130 : 150 + Math.random() * 40;
			osc.frequency.setValueAtTime(f0, t);
			osc.frequency.exponentialRampToValueAtTime(55, t + 0.055);
			const g2 = ctx.createGain();
			g2.gain.setValueAtTime(0.0001, t);
			g2.gain.exponentialRampToValueAtTime(0.07, t + 0.003);
			g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
			osc.connect(g2); g2.connect(ctx.destination);
			osc.start(t); osc.stop(t + 0.07);
		}
		// Generic blip helper: oscillator sweep with envelope.
		function blip(freqA, freqB, dur, vol, type, when) {
			const ctx = ensureAudio();
			if (ctx === null || ctx.state !== "running") return;
			const t = ctx.currentTime + (when ?? 0);
			const osc = ctx.createOscillator();
			osc.type = type ?? "square";
			osc.frequency.setValueAtTime(freqA, t);
			if (freqB !== null && freqB !== freqA) osc.frequency.exponentialRampToValueAtTime(freqB, t + dur);
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
			g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
			osc.connect(g); g.connect(ctx.destination);
			osc.start(t); osc.stop(t + dur + 0.02);
		}
		// Message lifecycle SFX (all gated on cfg.sfx).
		function playSend() { if (!cfg.sfx) return; blip(680, 1240, 0.09, 0.05, "square"); }
		function playDone() { if (!cfg.sfx) return; blip(880, 880, 0.07, 0.05, "square"); blip(1320, 1320, 0.09, 0.05, "square", 0.1); }
		function playNotify() { if (!cfg.sfx) return; blip(1560, 1560, 0.05, 0.035, "triangle"); blip(2080, 2080, 0.06, 0.03, "triangle", 0.07); }
		function playError() {
			if (!cfg.sfx) return;
			const ctx = ensureAudio();
			if (ctx === null || ctx.state !== "running") return;
			const t = ctx.currentTime;
			const src = ctx.createBufferSource();
			src.buffer = noiseBuffer(ctx);
			const lp = ctx.createBiquadFilter();
			lp.type = "lowpass"; lp.frequency.value = 900;
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.09, t);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
			src.connect(lp); lp.connect(g); g.connect(ctx.destination);
			src.start(t); src.stop(t + 0.3);
			blip(160, 70, 0.28, 0.07, "sawtooth");
		}
		function playWake() {
			if (!cfg.sfx) return;
			blip(120, 48, 0.6, 0.09, "sawtooth");
			blip(2400, 300, 0.35, 0.04, "square", 0.05);
			blip(90, 40, 0.8, 0.08, "sawtooth", 0.35);
		}
		// Johnny engram booting in: two detuned saws beating against each
		// other, punctuated by data-shrieks.
		function playJohnny() {
			if (!cfg.sfx) return;
			blip(58, 52, 0.9, 0.08, "sawtooth");
			blip(61, 55, 0.9, 0.07, "sawtooth");
			blip(1400, 200, 0.12, 0.04, "square", 0.12);
			blip(1400, 180, 0.12, 0.04, "square", 0.5);
		}

		// ── DECK control panel + SND quick chip ────────────────────────────
		function ensureDeckPanel() {
			if (document.getElementById("cp2077-deck") !== null) return null;
			const wrap = document.createElement("div");
			wrap.id = "cp2077-deck";
			wrap.setAttribute("role", "group");
			wrap.setAttribute("aria-label", "Cyberdeck theme settings");
			const title = document.createElement("div");
			title.className = "cp2077-deck-title";
			title.textContent = "CYBERDECK";
			wrap.appendChild(title);
			const items = [
				["scan", "CRT 扫描线"],
				["relic", "Relic 干扰"],
				["boot", "开机转场"],
				["type", "打字音效"],
				["sfx", "消息/提示音"]
			];
			const paint = (btn, on) => {
				btn.textContent = (on ? "◉ " : "○ ") + btn.dataset.label;
				btn.setAttribute("aria-pressed", String(on));
				btn.classList.toggle("cp2077-on", on);
			};
			for (const [key, label] of items) {
				const btn = document.createElement("button");
				btn.type = "button";
				btn.dataset.label = label;
				btn.addEventListener("click", () => {
					cfg[key] = !cfg[key];
					saveCfg();
					applyCfgToBody();
					paint(btn, cfg[key]);
					playNotify();
				});
				paint(btn, cfg[key]);
				wrap.appendChild(btn);
			}
			const deckBtn = document.createElement("button");
			deckBtn.id = "cp2077-deck-toggle";
			deckBtn.type = "button";
			deckBtn.title = "Cyberdeck theme settings";
			deckBtn.textContent = "DECK";
			deckBtn.addEventListener("click", () => {
				const open = wrap.classList.toggle("cp2077-open");
				deckBtn.setAttribute("aria-expanded", String(open));
				deckBtn.classList.toggle("cp2077-open", open);
			});
			(document.body || document.documentElement).append(deckBtn, wrap);
			return { deckBtn, wrap };
		}
		function ensureSndChip() {
			if (document.getElementById("cp2077-snd-toggle") !== null) return null;
			const btn = document.createElement("button");
			btn.id = "cp2077-snd-toggle";
			btn.type = "button";
			btn.title = "Toggle all sounds";
			const paint = () => {
				const on = cfg.type || cfg.sfx;
				btn.textContent = on ? "SND ◉" : "SND ○";
				btn.setAttribute("aria-pressed", String(on));
			};
			btn.addEventListener("click", () => {
				const on = cfg.type || cfg.sfx;
				cfg.type = !on;
				cfg.sfx = !on;
				saveCfg();
				applyCfgToBody();
				paint();
				if (!on) playNotify();
			});
			paint();
			(document.body || document.documentElement).appendChild(btn);
			return btn;
		}

		// ── interaction watchers (send / done / error / toast) ────────────
		let lastSfxAt = 0;
		function throttled(fn) {
			return () => {
				const now = Date.now();
				if (now - lastSfxAt < 90) return;
				lastSfxAt = now;
				fn();
			};
		}
		const onSendSound = throttled(playSend);
		const onNotifySound = throttled(playNotify);
		function onKeydown(e) {
			const el = e.target;
			if (el === null || el.tagName !== "TEXTAREA") return;
			if (e.metaKey || e.ctrlKey || e.altKey) return;
			if (e.key === "Enter") {
				onSendSound();
				const word = (el.value ?? "").trim().toLowerCase();
				if (word === "relic" || word === "johnny") return; // egg handles its own audio
				flashChip("GIG UP // 单子已发", "info");
				return;
			}
			playKeyClick(e.key);
		}
		// ── working state: combat HUD, NC loading tips, slang chips ──────
		let workingNow = false;
		let tipTimer = null;
		const NC_TIPS = [
			"TIP：NCPD 的扫描仪分不清义体人和原装人——但账单分得清。",
			"TIP：在夜之城，“免费”的东西最贵。",
			"TIP：超梦看多了，现实会开始像盗版。",
			"TIP：荒坂的合同用小字杀人。",
			"TIP：接单前先问一句：谁吃亏？",
			"TIP：义体不是装得多就强，是装得对就强。",
			"TIP：中间人永远抽成——包括你以为是朋友的那位。",
			"TIP：别在市中心堵车的时候接急单。"
		];
		function flashChip(text, tone) {
			let chip = document.getElementById("cp2077-chip");
			if (chip === null) {
				chip = document.createElement("div");
				chip.id = "cp2077-chip";
				chip.setAttribute("role", "status");
				(document.body || document.documentElement).appendChild(chip);
			}
			chip.className = tone;
			chip.textContent = text;
			// restart the entrance animation
			chip.style.animation = "none";
			void chip.offsetWidth;
			chip.style.animation = "";
			clearTimeout(chip._t);
			chip._t = setTimeout(() => chip.remove(), 1700);
		}
		function startTipRotation() {
			if (tipTimer !== null) return;
			flashChip("GIG IN PROGRESS // " + NC_TIPS[0], "info");
			let i = 1;
			tipTimer = setInterval(() => {
				flashChip("GIG IN PROGRESS // " + NC_TIPS[i % NC_TIPS.length], "info");
				i++;
			}, 6000);
		}
		function stopTipRotation() {
			if (tipTimer === null) return;
			clearInterval(tipTimer);
			tipTimer = null;
		}
		// Poll the composer's pending dot: appears while the agent streams,
		// vanishes on completion → combat-state chrome off, PREEM chip + chime.
		// (An interval is cheaper and more robust than a subtree
		// MutationObserver against a React tree.)
		function startPendingPoll() {
			const timer = setInterval(() => {
				const pending = document.querySelector("[class*='_pending']");
				const is = pending !== null;
				if (is !== workingNow) {
					workingNow = is;
					document.body.classList.toggle("cp-working", is);
					paintTitle();
					if (is) startTipRotation();
					else { stopTipRotation(); flashChip("PREEM. // 任务完成", "ok"); playDone(); }
				}
			}, 450);
			return () => { clearInterval(timer); stopTipRotation(); };
		}

		// ── Night City HUD footer: clock + hex stream, docked into the app's
		// own settings bar (its empty right half) so it never fights the
		// layout for a corner. Hidden when the bar is missing or collapsed.
		function startHudFooter() {
			const hud = document.createElement("div");
			hud.id = "cp2077-hud";
			hud.setAttribute("aria-hidden", "true");
			const hex = document.createElement("span");
			hex.id = "cp2077-hex";
			const clock = document.createElement("span");
			clock.id = "cp2077-clock";
			hud.append(hex, clock);
			(document.body || document.documentElement).appendChild(hud);
			const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const rnd = () => Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, "0");
			const bytes = [];
			for (let i = 0; i < 3; i++) bytes.push(rnd());
			const paintHex = () => {
				hex.textContent = "0x" + bytes.join("");
				hex.hidden = !cfg.scan || reduced;
			};
			const paintClock = () => {
				const d = new Date();
				const p = (n) => String(n).padStart(2, "0");
				clock.textContent = p(d.getHours()) + ":" + p(d.getMinutes()) + " NC-TIME";
			};
			// Find the settings bar (zh-CN "设置" / zh-TW "設定" / en "Settings").
			const findBar = () => {
				for (const b of document.querySelectorAll("button")) {
					const label = b.getAttribute("aria-label") || b.title || (b.textContent || "").trim();
					if (label === "设置" || label === "設定" || label.toLowerCase() === "settings") return b;
				}
				return null;
			};
			// Dock right-aligned inside the bar's empty right half.
			const dock = () => {
				const bar = findBar();
				if (bar === null) { hud.style.display = "none"; return; }
				const r = bar.getBoundingClientRect();
				if (r.width < 170 || r.height === 0) { hud.style.display = "none"; return; }
				hud.style.display = "";
				hud.style.left = Math.round(r.right - 10) + "px";
				hud.style.bottom = Math.round(window.innerHeight - r.bottom + (r.height - 13) / 2) + "px";
			};
			paintHex(); paintClock(); dock();
			// The settings bar renders after the app boots — poll the dock
			// every second for the first 20s, then settle into the slow tick.
			const earlyTimer = setInterval(dock, 1000);
			const earlyStop = setTimeout(() => clearInterval(earlyTimer), 20000);
			let hexIdx = 0;
			const t1 = setInterval(() => {
				if (document.hidden) return;
				bytes[hexIdx = (hexIdx + 1) % bytes.length] = rnd();
				paintHex();
			}, 400);
			const t2 = setInterval(() => {
				if (!document.hidden) paintClock();
				dock();
			}, 10000);
			window.addEventListener("resize", dock);
			// Sidebar collapse/expand shifts the bar without a window resize —
			// any click re-docks shortly after (narrow bars auto-hide the hud).
			const onClick = () => setTimeout(dock, 600);
			document.addEventListener("click", onClick, true);
			return () => {
				clearInterval(t1); clearInterval(t2);
				clearInterval(earlyTimer); clearTimeout(earlyStop);
				window.removeEventListener("resize", dock);
				document.removeEventListener("click", onClick, true);
				hud.remove();
			};
		}
		// Watch for error notices / toasts appearing anywhere.
		function startNoticeObserver() {
			const seen = new WeakSet();
			const observer = new MutationObserver((records) => {
				for (const rec of records) {
					for (const node of rec.addedNodes) {
						if (node.nodeType !== 1) continue;
						const el = node;
						if (seen.has(el)) continue;
						seen.add(el);
						const cls = (el.className && typeof el.className === "string") ? el.className : "";
						if (/_noticeError|_turnError/.test(cls)) { playError(); flashChip("FLATLINE // 连接中断", "err"); }
						else if (/_notice([^A-Za-z]|$)|_toast/.test(cls)) onNotifySound();
					}
				}
			});
			observer.observe(document.body, { childList: true, subtree: true });
			return () => observer.disconnect();
		}

		// ── ambient relic interference (random 40–70s, ~200ms) ────────────
		function startRelicLoop() {
			let stopped = false;
			let overlay = null;
			const flick = () => {
				if (stopped) return;
				if (cfg.relic && !document.hidden) {
					if (overlay === null) {
						overlay = document.createElement("div");
						overlay.id = "cp2077-relic";
						overlay.setAttribute("aria-hidden", "true");
					}
					if (!overlay.isConnected) (document.body || document.documentElement).appendChild(overlay);
					setTimeout(() => overlay.remove(), 220);
				}
				setTimeout(flick, 40000 + Math.random() * 30000);
			};
			setTimeout(flick, 25000 + Math.random() * 20000);
			return () => { stopped = true; };
		}

		// ── easter eggs: type a trigger word + Enter ──────────────────────
		// relic  → WAKE UP, SAMURAI (the Relic booting V)
		// johnny → the engram seizes the screen for 2.6s
		const EGGS = {
			relic: {
				id: "cp2077-wake",
				hold: 2000,
				sound: playWake,
				build(ov) {
					const l1 = document.createElement("div");
					l1.className = "cp2077-wake-line1";
					l1.textContent = "WAKE UP, SAMURAI.";
					const l2 = document.createElement("div");
					l2.className = "cp2077-wake-line2";
					l2.textContent = "WE HAVE A CITY TO BURN.";
					ov.append(l1, l2);
				}
			},
			johnny: {
				id: "cp2077-johnny",
				hold: 2600,
				sound: playJohnny,
				build(ov) {
					const LINES = [
						["THIS CITY'S GOT NO ROOM FOR GHOSTS.", "这座城市容不下幽灵。"],
						["NEVER STOP FIGHTING.", "别停下战斗。"],
						["WE HAD A CITY ONCE. WE LET IT BURN.", "我们曾拥有一座城，然后任它烧尽。"],
						["LEGENDS DON'T DIE. THEY JUST GO OFFLINE.", "传奇不死，只是下线。"]
					];
					const pick = LINES[Math.floor(Math.random() * LINES.length)];
					ov.append(
						Object.assign(document.createElement("div"), { className: "cp2077-johnny-tint" }),
						Object.assign(document.createElement("div"), { className: "cp2077-johnny-tear" })
					);
					const box = document.createElement("div");
					box.className = "cp2077-johnny-box";
					const q = document.createElement("div");
					q.className = "cp2077-johnny-quote";
					q.textContent = pick[0];
					const cn = document.createElement("div");
					cn.className = "cp2077-johnny-cn";
					cn.textContent = pick[1];
					const by = document.createElement("div");
					by.className = "cp2077-johnny-attr";
					by.textContent = "— JOHNNY SILVERHAND // ENGRAM";
					box.append(q, cn, by);
					ov.append(box);
				}
			}
		};
		function startTriggerWatcher() {
			const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const handler = (e) => {
				const el = e.target;
				if (el === null || el.tagName !== "TEXTAREA") return;
				if (e.key !== "Enter" || e.metaKey || e.ctrlKey || e.altKey) return;
				const egg = EGGS[(el.value ?? "").trim().toLowerCase()];
				if (egg === undefined || document.getElementById(egg.id) !== null) return;
				if (egg.id === "cp2077-johnny" && reduced()) return;
				const ov = document.createElement("div");
				ov.id = egg.id;
				ov.setAttribute("aria-hidden", "true");
				egg.build(ov);
				(document.body || document.documentElement).appendChild(ov);
				egg.sound();
				setTimeout(() => ov.remove(), egg.hold);
			};
			document.addEventListener("keydown", handler, true);
			return () => document.removeEventListener("keydown", handler, true);
		}

		// ── tab takeover: glitched favicon + terminal title ───────────────
		const TITLE_BASE = "DSH // NC-TERMINAL";
		function paintTitle() {
			document.title = (workingNow ? "▶ NC-JOB // " : "") + TITLE_BASE;
		}
		function applyTabIdentity() {
			try {
				const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>"
					+ "<rect width='32' height='32' fill='#05070d'/>"
					+ "<polygon points='6,3 26,3 29,6 29,26 26,29 3,29 3,6' fill='#fce300'/>"
					+ "<polygon points='10,8 22,8 24,10 24,22 22,24 8,24 8,10' fill='#05070d'/>"
					+ "<rect x='12' y='12' width='8' height='8' fill='#00f0ff'/></svg>";
				const href = "data:image/svg+xml," + encodeURIComponent(svg);
				let link = document.querySelector("link[rel*='icon']");
				if (link === null) {
					link = document.createElement("link");
					link.rel = "icon";
					(document.head || document.documentElement).appendChild(link);
				}
				link.href = href;
			} catch {}
			const glitchChars = "▓▒░#%@&$";
			paintTitle();
			const timer = setInterval(() => {
				if (document.hidden) return;
				const b = workingNow ? "▶ NC-JOB // " + TITLE_BASE : TITLE_BASE;
				const i = Math.floor(Math.random() * b.length);
				document.title = b.slice(0, i) + glitchChars[Math.floor(Math.random() * glitchChars.length)] + b.slice(i + 1);
				setTimeout(paintTitle, 160);
			}, 9000);
			return () => clearInterval(timer);
		}

		// ── boot glitch transition (once per tab SESSION: the first load of a
		// tab plays it; reloads/reconnects within that session skip the replay,
		// a fresh tab or a new day sees it again) ─────────────────────────
		const BOOT_SEEN_KEY = "cp2077-boot-seen";
		function playBootTransition() {
			if (!cfg.boot) return null;
			if (document.getElementById("cp2077-boot") !== null) return null;
			if (typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
			try {
				if (sessionStorage.getItem(BOOT_SEEN_KEY) === "1") return null;
				sessionStorage.setItem(BOOT_SEEN_KEY, "1");
			} catch {}
			const ov = document.createElement("div");
			ov.id = "cp2077-boot";
			ov.setAttribute("aria-hidden", "true");
			const mk = (cls, text) => {
				const d = document.createElement("div");
				d.className = cls;
				if (text !== undefined) d.textContent = text;
				return d;
			};
			ov.append(
				mk("cp-line"),
				mk("cp-crt"),
				mk("cp-bars"),
				mk("cp-title", "NIGHT CITY"),
				mk("cp-sub", "DSH TERMINAL // NETRUNNER OS"),
				mk("cp-flash")
			);
			(document.body || document.documentElement).appendChild(ov);
			setTimeout(() => ov.remove(), 2300);
			return ov;
		}

		// ── the identity layer (CSS) ──────────────────────────────────────
		function injectCyberpunkStyles() {
			if (document.querySelector("style[data-cyberpunk-theme]")) return;
			const tokenLines = Object.entries(TOKENS)
				.map(([name, value]) => "  " + name + ": " + value + " !important;")
				.join("\n");
			const style = document.createElement("style");
			style.dataset.cyberpunkTheme = "dsh-theme-cyberpunk2077";
			style.textContent = [
				// MiSans (Xiaomi) carries the whole UI — CJK-sharded woff2 from jsDelivr;
				// code keeps a local mono stack so no Google Fonts dependency remains.
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Regular.min.css');",
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Medium.min.css');",
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Semibold.min.css');",
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Bold.min.css');",
				"html { color-scheme: dark !important; }",
				"body {",
				"  background-color: #05070d !important;",
				"  color: #e8f1ff;",
				"  --dsw-font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  --ds-font-family-code: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei';",
				tokenLines,
				"}",

				// ── CRT: scanlines + city grid + neon haze (toggle: scan) ─────
				"#root::after {",
				"  content: \"\";",
				"  position: fixed; inset: 0; z-index: 9999; pointer-events: none;",
				"  background:",
				"    repeating-linear-gradient(0deg, rgba(0,0,0,0.16) 0 1px, transparent 1px 3px),",
				"    repeating-linear-gradient(90deg, rgba(0,240,255,0.022) 0 1px, transparent 1px 84px),",
				"    repeating-linear-gradient(0deg, rgba(0,240,255,0.018) 0 1px, transparent 1px 84px),",
				"    radial-gradient(1100px 520px at 92% -6%, rgba(255,0,127,0.075), transparent 62%),",
				"    radial-gradient(950px 480px at -6% 106%, rgba(0,240,255,0.065), transparent 62%);",
				"}",
				"body.cp-off-scan #root::after { display: none; }",

				// ── hazard stripe across the top ──────────────────────────────
				"[class*='frame']::before {",
				"  content: \"\";",
				"  position: absolute; top: 0; left: 0; right: 0; height: 3px;",
				"  z-index: 60; pointer-events: none; opacity: 0.55;",
				"  background: repeating-linear-gradient(-45deg, rgba(252,227,0,0.85) 0 7px, transparent 7px 14px);",
				"}",

				// ── chamfered chrome: every button gets the NC 45° cut ────────
				"button {",
				"  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  font-weight: 600; letter-spacing: 0.06em;",
				"  transition: filter 0.15s var(--ds-ease-in-out), color 0.15s var(--ds-ease-in-out), background-color 0.15s var(--ds-ease-in-out);",
				"}",
				"button:hover { color: #fce300; filter: drop-shadow(0 0 6px rgba(252,227,0,0.45)); }",
				"button:active { transform: translateY(1px); }",
				"button:disabled { filter: none; }",

				// primary actions: solid NC yellow, black text, neon pulse
				"button[class*='primary'], button[class*='newSession'], button[class*='add'] {",
				"  background: #fce300 !important; color: #0a0a05 !important; border-color: transparent !important;",
				"}",
				"button[class*='primary']:hover, button[class*='newSession']:hover, button[class*='add']:hover {",
				"  background: #fcee0a !important; color: #0a0a05 !important;",
				"  filter: drop-shadow(0 0 10px rgba(252,227,0,0.6));",
				"}",
				"@keyframes cpPulse {",
				"  0%, 100% { filter: drop-shadow(0 0 3px rgba(252,227,0,0.25)); }",
				"  50% { filter: drop-shadow(0 0 12px rgba(252,227,0,0.55)); }",
				"}",
				"button[class*='primary'], button[class*='newSession'] { animation: cpPulse 2.8s ease-in-out infinite; }",

				// ── composer: transparent-input + mirror architecture ────────
				"body textarea {",
				"  background: transparent !important;",
				"  caret-color: #fce300 !important;",
				"}",
				"[class*='_card']:has(textarea:focus) {",
				"  box-shadow: 0 0 0 1px rgba(252, 227, 0, 0.35), 0 0 18px rgba(252, 227, 0, 0.12) !important;",
				"}",
				"[class*='_backdrop'] { color: #e8f1ff !important; }",

				// send button: EXECUTE hint on hover
				"[class*='_row'] button[class*='_primary'] { position: relative; }",
				"[class*='_row'] button[class*='_primary']::after {",
				"  content: 'EXECUTE ⏎';",
				"  position: absolute; right: 0; bottom: calc(100% + 8px);",
				"  padding: 2px 8px; white-space: nowrap;",
				"  font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.18em;",
				"  color: #fce300; background: rgba(6,10,18,0.92); border: 1px solid rgba(252,227,0,0.35);",
				"  clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px);",
				"  opacity: 0; transform: translateY(3px); transition: opacity .12s, transform .12s; pointer-events: none; z-index: 30;",
				"}",
				"[class*='_row'] button[class*='_primary']:hover::after { opacity: 1; transform: translateY(0); }",
				// RGB-split glitch, only on the EXECUTE button hover
				"[class*='_row'] button[class*='_primary']:hover {",
				"  text-shadow: -2px 0 rgba(255,0,60,0.9), 2px 0 rgba(0,240,255,0.9);",
				"}",

				// ── agent working: segmented HUD spinner + PROCESSING ────────
				"[class*='_pending'] {",
				"  width: 14px !important; height: 14px !important; border-radius: 50% !important;",
				"  background: conic-gradient(#00f0ff 0 25%, transparent 25% 50%, #fce300 50% 62%, transparent 62% 87%, #00f0ff 87% 100%) !important;",
				"  animation: cpSpin 1.1s steps(8) infinite !important;",
				"  filter: drop-shadow(0 0 5px rgba(0,240,255,0.6));",
				"}",
				"@keyframes cpSpin { to { transform: rotate(360deg); } }",
				"[class*='_accessory']:has([class*='_pending'])::after {",
				"  content: 'PROCESSING_';",
				"  font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.22em;",
				"  color: #00f0ff; text-shadow: 0 0 8px rgba(0,240,255,0.5);",
				"  animation: cpBlink 1.2s steps(2) infinite;",
				"}",
				"@keyframes cpBlink { 50% { opacity: 0.45; } }",

				// ── combat state: stamina bar while the agent works ───────────
				"body.cp-working [class*='_accessory']:has([class*='_pending'])::before {",
				"  content: \"\"; display: block; margin: 3px 0 2px; width: 108px; height: 2px;",
				"  background-image: linear-gradient(90deg, transparent, #00f0ff 30%, #fce300 50%, #00f0ff 70%, transparent);",
				"  background-size: 200% 100%;",
				"  animation: cpStamina 1.6s linear infinite;",
				"}",
				"@keyframes cpStamina { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }",

				// ── sessions as shards: rarity cycling + legendary active ────
				"[class*='_sessionRow'] {",
				"  position: relative; border-radius: 2px !important;",
				"  border-left: 2px solid rgba(159,178,214,0.25);",
				"  transition: border-color .15s, filter .15s;",
				"}",
				"[class*='_sessionRow']:nth-child(5n+2) { border-left-color: rgba(61,255,190,0.4); }",
				"[class*='_sessionRow']:nth-child(5n+3) { border-left-color: rgba(0,240,255,0.4); }",
				"[class*='_sessionRow']:nth-child(5n+4) { border-left-color: rgba(190,80,255,0.4); }",
				"[class*='_sessionRow']:nth-child(5n+5) { border-left-color: rgba(255,140,0,0.45); }",
				"[class*='_sessionRow']:hover { filter: drop-shadow(0 0 4px rgba(0,240,255,0.25)); }",
				"[class*='_sessionRow'][class*='_selected'] {",
				"  border-left: 2px solid #ffb300 !important;",
				"  background: linear-gradient(90deg, rgba(252,227,0,0.10), rgba(252,227,0,0.02)) !important;",
				"  box-shadow: inset 0 0 12px rgba(252,227,0,0.06), 0 0 10px rgba(252,227,0,0.18);",
				"  filter: drop-shadow(0 0 6px rgba(255,179,0,0.35));",
				"}",

				// ── Kiroshi optics: hover = target lock (sweep + brackets) ───
				"[class*='_sessionRow']::before {",
				"  content: \"\"; position: absolute; left: 0; right: 0; top: 0; height: 1px; z-index: 6;",
				"  pointer-events: none; opacity: 0;",
				"  background: linear-gradient(90deg, transparent, rgba(0,240,255,0.85), transparent);",
				"}",
				"[class*='_sessionRow']:hover::before { animation: cpKiroshi 1.5s linear infinite; }",
				"@keyframes cpKiroshi { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }",
				"[class*='_sessionRow']:not([class*='_selected']):hover {",
				"  background-image:",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)),",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)),",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)),",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)) !important;",
				"  background-repeat: no-repeat;",
				"  background-size: 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px;",
				"  background-position: 0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%;",
				"}",

				// ── goal bar → mission tracker ────────────────────────────────
				"[class*='_dock'] {",
				"  border-left: 2px solid rgba(252,227,0,0.5) !important;",
				"  background: linear-gradient(90deg, rgba(252,227,0,0.05), transparent 65%) !important;",
				"}",
				"[class*='_dock'] [class*='_label'] {",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif !important;",
				"  letter-spacing: 0.14em; color: #fce300 !important;",
				"}",
				"[class*='_dock'] [class*='_label']::before { content: '◈ '; color: #ffb300; }",

				// ── stats strip → HUD readout ────────────────────────────────
				"[class*='_strip'] {",
				"  font-family: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei' !important;",
				"  letter-spacing: 0.08em; color: #8fa3c8 !important;",
				"}",
				"[class*='_strip']::before { content: '⟨ '; color: rgba(252,227,0,0.5); }",
				"[class*='_strip']::after { content: ' ⟩'; color: rgba(252,227,0,0.5); }",

				// ── notices / toasts → CP notification chrome ────────────────
				"[class*='_notice'], [class*='_toast'] {",
				"  position: relative;",
				"  border: 1px solid rgba(252,227,0,0.35) !important; border-left: 3px solid #fce300 !important;",
				"  background: linear-gradient(90deg, rgba(252,227,0,0.08), rgba(13,19,34,0.95)) !important;",
				"  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);",
				"  animation: cpToastIn .28s cubic-bezier(0.2, 0.9, 0.3, 1.2);",
				"}",
				"@keyframes cpToastIn {",
				"  0% { opacity: 0; transform: translateX(-14px); filter: drop-shadow(0 0 0 rgba(252,227,0,0)); }",
				"  35% { opacity: 1; filter: drop-shadow(0 0 10px rgba(252,227,0,0.5)); }",
				"  100% { opacity: 1; transform: translateX(0); }",
				"}",
				"[class*='_noticeError'] {",
				"  border-color: rgba(255,0,60,0.5) !important; border-left: 3px solid #ff003c !important;",
				"  background: linear-gradient(90deg, rgba(255,0,60,0.10), rgba(13,19,34,0.95)) !important;",
				"}",
				// hazard tape across the top of every error notice
				"[class*='_noticeError']::after {",
				"  content: \"\"; position: absolute; top: 0; left: 0; right: 0; height: 3px; pointer-events: none;",
				"  background: repeating-linear-gradient(-45deg, rgba(255,0,60,0.85) 0 6px, transparent 6px 12px);",
				"}",
				"[class*='_turnErrorTitle'] { color: #ff3b69 !important; font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif !important; letter-spacing: 0.08em; }",

				// ── empty-state flavor line ──────────────────────────────────
				"[class*='_composerHero']::after {",
				"  content: '— NIGHT CITY LOCAL // 2077 —';",
				"  display: block; margin-top: 10px;",
				"  font: 400 11px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.3em;",
				"  color: rgba(0,240,255,0.55);",
				"}",

				// ── glitching logo ────────────────────────────────────────────
				// No `transform` here: on Windows DSH renders the sidebar-collapse
				// toggle INSIDE .logoRow as `position: fixed; left: 12px`, so any
				// non-none transform on .logoRow becomes that button's containing
				// block and it drops out of the title bar onto the brand mark.
				// text-shadow alone carries the RGB-split glitch.
				"@keyframes cpLogoGlitch {",
				"  0%, 86%, 100% { text-shadow: none; }",
				"  88% { text-shadow: -2px 0 #ff003c, 2px 0 #00f0ff; }",
				"  90% { text-shadow: 2px 0 #ff003c, -2px 0 #00f0ff; }",
				"  92% { text-shadow: none; }",
				"  94% { text-shadow: -1px 0 #ff003c, 1px 0 #00f0ff; }",
				"  96% { text-shadow: none; }",
				"}",
				"[class*='logoRow'] {",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  color: #fce300 !important;",
				"  letter-spacing: 0.04em;",
				"  text-shadow: 0 0 14px rgba(252, 227, 0, 0.35);",
				"  animation: cpLogoGlitch 5.5s infinite steps(1);",
				"}",
				"[class*='logoRow'] svg, [class*='logoRow'] path { color: #fce300; }",

				// headings
				"h1, h2, h3, h4 {",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.03em;",
				"}",
				"h1, h2 { text-shadow: 0 0 12px rgba(0, 240, 255, 0.3), 0 0 30px rgba(252, 227, 0, 0.15); }",

				// sidebar chrome
				"[class*='sidebarCol'] { box-shadow: inset -1px 0 0 rgba(0, 240, 255, 0.10); }",
				"[class*='sidebarCol'] [class*='footArea'] { border-top: 1px solid rgba(252, 227, 0, 0.25); }",
				"[class*='sidebarCol'] [class*='railFish'], [class*='sidebarCol'] svg { color: #fce300; }",

				// details panel — HUD corner brackets
				"[class*='detailsCol'] { position: relative; }",
				"[class*='detailsCol']::after {",
				"  content: \"\"; position: absolute; top: 10px; right: 10px;",
				"  width: 16px; height: 16px; pointer-events: none;",
				"  border-top: 2px solid rgba(252, 227, 0, 0.6);",
				"  border-right: 2px solid rgba(252, 227, 0, 0.6);",
				"}",
				"[class*='detailsCol']::before {",
				"  content: \"\"; position: absolute; bottom: 10px; left: 10px;",
				"  width: 16px; height: 16px; pointer-events: none;",
				"  border-bottom: 2px solid rgba(0, 240, 255, 0.45);",
				"  border-left: 2px solid rgba(0, 240, 255, 0.45);",
				"}",

				// markdown
				"pre {",
				"  clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);",
				"  border-left: 2px solid rgba(0, 240, 255, 0.5);",
				"  background: #060a12 !important;",
				"  font-family: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei' !important;",
				"}",
				"code { font-family: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; color: #fcee0a; }",
				":not(pre) > code { background: rgba(252, 227, 0, 0.08); padding: 1px 5px; }",
				"blockquote { border-left: 2px solid rgba(252, 227, 0, 0.45); }",

				// selection / focus / forms
				"::selection { background: rgba(252, 227, 0, 0.30); color: #ffffff; }",
				":focus-visible { outline: 1px solid #00f0ff; outline-offset: 1px; box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.22); }",
				"input[type='checkbox'], input[type='radio'] { accent-color: #fce300; }",
				"a { color: #00f0ff; }",
				"a:hover { color: #fce300; }",

				// dialogs — hazard edge for confirmations
				"[role='dialog'], [role='alertdialog'] {",
				"  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);",
				"  border: 1px solid rgba(252, 227, 0, 0.22);",
				"}",

				// scrollbars
				"*::-webkit-scrollbar { width: 8px; height: 8px; }",
				"*::-webkit-scrollbar-track { background: transparent; }",
				"*::-webkit-scrollbar-thumb { background: rgba(252, 227, 0, 0.28) !important; border-radius: 0; }",
				"*::-webkit-scrollbar-thumb:hover { background: rgba(252, 227, 0, 0.5) !important; }",

				// ── slang status chips: GIG UP / PREEM. / FLATLINE / tips ─────
				"#cp2077-chip { position: fixed; top: 12px; left: 50%; transform: translateX(-50%); z-index: 10052;",
				"  max-width: min(64vw, 560px); padding: 4px 12px; pointer-events: none; text-align: center;",
				"  font: 600 11px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.16em;",
				"  background: rgba(6,10,18,0.92);",
				"  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);",
				"  animation: cpChipIn .22s cubic-bezier(0.2, 0.9, 0.3, 1.2); }",
				"#cp2077-chip.info { color: #00f0ff; box-shadow: inset 0 0 0 1px rgba(0,240,255,0.45), 0 0 12px rgba(0,240,255,0.18); }",
				"#cp2077-chip.ok { color: #00f5a0; box-shadow: inset 0 0 0 1px rgba(0,245,160,0.45), 0 0 12px rgba(0,245,160,0.18); }",
				"#cp2077-chip.err { color: #ff3b69; box-shadow: inset 0 0 0 1px rgba(255,0,60,0.5), 0 0 12px rgba(255,0,60,0.2); }",
				"@keyframes cpChipIn { 0% { opacity: 0; transform: translate(-50%, -6px); } 100% { opacity: 1; transform: translate(-50%, 0); } }",

				// ── Night City HUD footer (docked into the settings bar) ──────
				"#cp2077-hud { position: fixed; z-index: 10048; pointer-events: none; user-select: none;",
				"  display: flex; align-items: center; gap: 10px; white-space: nowrap;",
				"  transform: translateX(-100%);",
				"  font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; }",
				"#cp2077-hud #cp2077-clock { color: rgba(0,240,255,0.6); letter-spacing: 0.2em; text-shadow: 0 0 8px rgba(0,240,255,0.35); }",
				"#cp2077-hud #cp2077-hex { color: rgba(0,240,255,0.3); letter-spacing: 0.18em; }",
				"body.cp-off-scan #cp2077-hud #cp2077-hex { display: none; }",

				// ── easter egg: JOHNNY SILVERHAND seizes the screen ──────────
				"#cp2077-johnny { position: fixed; inset: 0; z-index: 2147483644; pointer-events: none;",
				"  animation: cpJohnnyOut 2.6s forwards; }",
				"#cp2077-johnny .cp2077-johnny-tint { position: absolute; inset: 0; backdrop-filter: saturate(0.35) contrast(1.18);",
				"  background: linear-gradient(90deg, rgba(255,0,60,0.16), transparent 30%, transparent 70%, rgba(0,240,255,0.16)); }",
				"#cp2077-johnny .cp2077-johnny-tear { position: absolute; inset: -10%; mix-blend-mode: screen;",
				"  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 18px, rgba(255,0,60,0.06) 18px 20px, transparent 20px 44px);",
				"  animation: cpJohnnyTear 0.4s steps(4) infinite; }",
				"@keyframes cpJohnnyTear { 0% { transform: translateX(-8px); } 50% { transform: translateX(8px); } 100% { transform: translateX(-8px); } }",
				"#cp2077-johnny .cp2077-johnny-box { position: absolute; inset: 0; display: grid; place-content: center; gap: 8px; text-align: center; }",
				"#cp2077-johnny .cp2077-johnny-quote { font: 700 clamp(26px, 4.4vw, 54px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.12em; color: #e8f1ff; text-shadow: -3px 0 rgba(255,0,60,0.8), 3px 0 rgba(0,240,255,0.8);",
				"  animation: cpJohnnyQuote 2.6s steps(1) forwards; }",
				"#cp2077-johnny .cp2077-johnny-cn { font: 400 clamp(11px, 1.4vw, 15px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.3em; color: rgba(159,178,214,0.85); }",
				"#cp2077-johnny .cp2077-johnny-attr { font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei';",
				"  letter-spacing: 0.26em; color: rgba(255,59,105,0.8); margin-top: 6px; }",
				"@keyframes cpJohnnyQuote {",
				"  0% { opacity: 0; } 6% { opacity: 1; transform: translateX(-5px) skewX(-2deg); }",
				"  10% { transform: translateX(5px) skewX(2deg); } 14% { transform: none; }",
				"  40% { transform: none; } 46% { transform: translateX(3px); } 50% { transform: none; }",
				"  84% { opacity: 1; } 100% { opacity: 0; } }",
				"@keyframes cpJohnnyOut { 0% { opacity: 0; } 6% { opacity: 1; } 86% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",

				// ── DECK panel + SND chip chrome ─────────────────────────────
				"#cp2077-snd-toggle, #cp2077-deck-toggle { position: fixed; right: 14px; z-index: 10050; padding: 4px 10px;",
				"  font: 600 11px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.14em; color: #fce300;",
				"  background: rgba(6, 10, 18, 0.85); border: 1px solid rgba(252, 227, 0, 0.35); cursor: pointer; opacity: 0.55;",
				"  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px); }",
				"#cp2077-snd-toggle:hover, #cp2077-deck-toggle:hover { opacity: 1; filter: drop-shadow(0 0 6px rgba(252, 227, 0, 0.45)); }",
				"#cp2077-snd-toggle { bottom: 14px; }",
				"#cp2077-deck-toggle { bottom: 44px; color: #00f0ff; border-color: rgba(0, 240, 255, 0.35); }",
				"#cp2077-deck-toggle.cp2077-open { opacity: 1; }",
				"#cp2077-deck { position: fixed; right: 14px; bottom: 76px; z-index: 10049; width: 176px; padding: 10px;",
				"  background: rgba(6, 10, 18, 0.94); border: 1px solid rgba(0, 240, 255, 0.3);",
				"  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);",
				"  display: none; flex-direction: column; gap: 4px;",
				"  box-shadow: 0 0 18px rgba(0, 240, 255, 0.12); }",
				"#cp2077-deck.cp2077-open { display: flex; }",
				"#cp2077-deck .cp2077-deck-title { font: 700 11px 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif; letter-spacing: 0.3em;",
				"  color: #00f0ff; margin-bottom: 6px; padding-bottom: 5px;",
				"  background: repeating-linear-gradient(-45deg, rgba(0,240,255,0.4) 0 5px, transparent 5px 10px) bottom / 100% 3px no-repeat; }",
				"#cp2077-deck button { width: 100%; text-align: left; padding: 5px 8px; font: 600 11px 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.1em; color: #9fb2d6; background: transparent; border: none; cursor: pointer;",
				"  clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px); }",
				"#cp2077-deck button:hover { color: #e8f1ff; background: rgba(0, 240, 255, 0.08); filter: none; }",
				"#cp2077-deck button.cp2077-on { color: #fce300; }",

				// ── relic interference flicker (ambient, toggle: relic) ──────
				"#cp2077-relic { position: fixed; inset: 0; z-index: 2147483640; pointer-events: none;",
				"  background: linear-gradient(0deg, rgba(255,0,60,0.05), transparent 30%, transparent 70%, rgba(0,240,255,0.05)),",
				"    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 9px);",
				"  mix-blend-mode: screen; animation: cpRelic .22s steps(3); }",
				"@keyframes cpRelic {",
				"  0% { transform: translateX(-3px) skewX(-0.4deg); filter: hue-rotate(25deg); }",
				"  50% { transform: translateX(3px) skewX(0.4deg); filter: hue-rotate(-30deg) saturate(1.6); }",
				"  100% { transform: none; filter: none; } }",
				"body.cp-off-relic #cp2077-relic { display: none; }",
				"@media (prefers-reduced-motion: reduce) { #cp2077-relic { display: none; } }",

				// ── easter egg: WAKE UP SAMURAI ─────────────────────────────
				"#cp2077-wake { position: fixed; inset: 0; z-index: 2147483645; background: #05070d;",
				"  pointer-events: none; display: grid; place-content: center; gap: 8px;",
				"  animation: cpWakeIn 2s forwards; }",
				"#cp2077-wake .cp2077-wake-line1 { font: 700 clamp(30px, 5vw, 64px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.14em; color: #fce300; text-shadow: -3px 0 #ff003c, 3px 0 #00f0ff; }",
				"#cp2077-wake .cp2077-wake-line2 { font: 400 clamp(12px, 1.6vw, 18px) 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei';",
				"  letter-spacing: 0.3em; color: #00f0ff; }",
				"@keyframes cpWakeIn {",
				"  0% { opacity: 0; transform: scaleY(0.02); }",
				"  8% { opacity: 1; transform: scaleY(1); }",
				"  12% { transform: translateX(-6px) skewX(-2deg); }",
				"  14% { transform: translateX(6px) skewX(2deg); }",
				"  16% { transform: none; }",
				"  30% { opacity: 1; } 88% { opacity: 1; }",
				"  100% { opacity: 0; visibility: hidden; } }",

				// ── boot transition ──────────────────────────────────────────
				"#cp2077-boot { position: fixed; inset: 0; z-index: 2147483646; background: #05070d;",
				"  pointer-events: none; animation: cpBootFade 2s forwards; }",
				"#cp2077-boot .cp-line { position: absolute; top: 50%; left: 0; right: 0; height: 2px; transform: translateY(-50%);",
				"  background: linear-gradient(90deg, transparent, #00f0ff 18%, #fff 50%, #00f0ff 82%, transparent);",
				"  box-shadow: 0 0 26px 3px rgba(0, 240, 255, 0.75); animation: cpBootLine 0.7s cubic-bezier(0.2, 0.75, 0.3, 1) forwards; }",
				"#cp2077-boot .cp-crt { position: absolute; inset: 0;",
				"  background: radial-gradient(58% 78% at 50% 50%, rgba(0, 240, 255, 0.14), transparent 72%);",
				"  clip-path: inset(49.9% 0 49.9% 0); animation: cpBootCrt 0.8s cubic-bezier(0.2, 0.8, 0.25, 1) forwards; }",
				"#cp2077-boot .cp-bars { position: absolute; inset: -15%; mix-blend-mode: screen; animation: cpBootBars 1s steps(7) forwards;",
				"  background: repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.10) 0 2px, transparent 2px 26px, rgba(255, 0, 60, 0.09) 26px 27px, transparent 27px 53px); }",
				"#cp2077-boot .cp-title { position: absolute; left: 50%; top: 44%; transform: translate(-50%, -50%); white-space: nowrap;",
				"  font: 700 clamp(34px, 6vw, 72px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif; letter-spacing: 0.16em; color: #fce300;",
				"  animation: cpBootTitle 1.5s steps(1) forwards; }",
				"#cp2077-boot .cp-sub { position: absolute; left: 50%; top: 56%; transform: translate(-50%, -50%);",
				"  font: 400 clamp(10px, 1.3vw, 14px) 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.34em; color: #00f0ff;",
				"  opacity: 0; animation: cpBootSub 1.5s ease-out forwards; }",
				"#cp2077-boot .cp-flash { position: absolute; inset: 0; background: #fff; opacity: 0; mix-blend-mode: screen; animation: cpBootFlash 2s forwards; }",
				"@keyframes cpBootFade { 0% { opacity: 0; } 3% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",
				"@keyframes cpBootLine { 0% { transform: translateY(-50%) scaleX(0.02); opacity: 1; } 45% { transform: translateY(-50%) scaleX(1); opacity: 1; } 100% { transform: translateY(-50%) scaleX(1); opacity: 0; } }",
				"@keyframes cpBootCrt { 0% { clip-path: inset(49.9% 0 49.9% 0); opacity: 1; } 70% { opacity: 0.8; } 100% { clip-path: inset(0 0 0 0); opacity: 0; } }",
				"@keyframes cpBootBars { 0% { transform: translateY(-5%); opacity: 1; } 70% { opacity: 0.7; } 100% { transform: translateY(5%); opacity: 0; } }",
				"@keyframes cpBootTitle { 0% { opacity: 0; } 10% { opacity: 1; transform: translate(-50%, -50%) skewX(0); }",
				"  14% { opacity: 1; transform: translate(-49%, -50%) skewX(-6deg); text-shadow: -3px 0 #ff003c, 3px 0 #00f0ff; }",
				"  18% { transform: translate(-51%, -50%) skewX(4deg); text-shadow: 3px 0 #ff003c, -3px 0 #00f0ff; }",
				"  22% { transform: translate(-50%, -50%) skewX(0); text-shadow: 0 0 18px rgba(252, 227, 0, 0.45); }",
				"  55% { opacity: 1; } 88% { opacity: 1; } 100% { opacity: 0; letter-spacing: 0.34em; } }",
				"@keyframes cpBootSub { 0% { opacity: 0; letter-spacing: 0.1em; } 25% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; letter-spacing: 0.4em; } }",
				"@keyframes cpBootFlash { 0%, 68% { opacity: 0; } 73% { opacity: 0.85; } 77% { opacity: 0.1; } 80% { opacity: 0.5; } 84%, 100% { opacity: 0; } }",
				"@media (prefers-reduced-motion: reduce) { #cp2077-boot { display: none; } }",

				// ── perf guards: small screens go lean, reduced motion goes still ──
				"@media (max-width: 768px) {",
				"  #root::after, #cp2077-hud, #cp2077-chip { display: none; }",
				"  button[class*='primary'], button[class*='newSession'] { animation: none; }",
				"  [class*='_sessionRow']:hover::before { animation: none; }",
				"}",
				"@media (prefers-reduced-motion: reduce) {",
				"  button[class*='primary'], button[class*='newSession'], [class*='logoRow'] { animation: none !important; }",
				"  [class*='_sessionRow']:hover::before { animation: none !important; }",
				"  body.cp-working [class*='_accessory']:has([class*='_pending'])::before { animation: none !important; }",
				"  [class*='_accessory']:has([class*='_pending'])::after { animation: none !important; }",
				"  #cp2077-hud #cp2077-hex, #cp2077-chip { display: none !important; }",
				"}"
			].join("\n");
			(document.head || document.documentElement).appendChild(style);
		}

		// Browser plugin: register/focus the theme, force dark chroma, wire
		// every subsystem (SFX, watchers, deck, relic, tab identity, boot).
		function apply(ctx) {
			ctx.effect(() => {
				document.documentElement.style.colorScheme = "dark";
				document.body.toggleAttribute("data-ds-dark-theme", true);
				loadCfg();
				applyCfgToBody();
				injectCyberpunkStyles();
				playBootTransition();
				ensureSndChip();
				ensureDeckPanel();
				document.addEventListener("keydown", onKeydown, true);
				const stopPending = startPendingPoll();
				const stopNotices = startNoticeObserver();
				const stopRelic = startRelicLoop();
				const stopWake = startTriggerWatcher();
				const stopTitle = applyTabIdentity();
				const stopClock = startHudFooter();
				// Keep dark chroma even if the theme service later resolves the
				// preference to a light scheme and flips the attribute off.
				const observer = new MutationObserver(() => {
					document.documentElement.style.colorScheme = "dark";
					document.body.toggleAttribute("data-ds-dark-theme", true);
				});
				observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
				try {
					ctx.theme.register({
						id: THEME_ID,
						colorScheme: "dark",
						tokens: TOKENS
					});
					ctx.theme.setTheme(THEME_ID);
				} catch (e) {
					console.error("dsh-theme-cyberpunk2077 theme register failed", e);
				}
				return () => {
					observer.disconnect();
					document.removeEventListener("keydown", onKeydown, true);
					stopPending();
					stopNotices();
					stopRelic();
					stopWake();
					stopTitle();
					stopClock();
				};
			}, "dsh-theme-cyberpunk2077: register");
		}

		exports.isPlugin = true;
		exports.inject = ["theme"];
		exports.apply = apply;
		return module.exports;
	}
});
