import { Plugin, PluginSettingTab, Setting, App } from "obsidian";
import * as simpleIcons from "simple-icons";

type IconSource = {
  viewBox?: string;
  svg: string;
};

const CUSTOM_ICON_MAP: Record<string, IconSource> = {
  siChatgpt: {
    viewBox: "0 0 320 320",
    svg: `
      <svg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'>
      <path d='m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z'/>
      </svg>
    `,
  },
  siNotioncalendar: {
    viewBox: "0 0 313 325",
    svg: `<svg viewBox="0 0 313 325" xmlns="http://www.w3.org/2000/svg">
<path d="M33.9538 269.071C28.3028 269.008 23.2819 267.562 19.3809 263.924C19.3809 263.924 19.3679 263.924 19.3559 263.899C18.9029 263.458 18.4749 263.006 18.0719 262.552C14.9889 259.028 13.3149 254.51 13.3149 249.627L13.2769 48.484C13.2769 36.843 23.0929 26.397 34.7089 25.679L235.62 13.245C236.061 13.22 236.488 13.207 236.929 13.207C241.95 13.207 246.632 15.019 250.206 18.392C250.696 18.858 251.162 19.336 251.59 19.84C252.337 20.692 253 21.602 253.58 22.564C253.001 21.609 252.334 20.702 251.59 19.852C254.598 23.351 256.246 27.806 256.246 32.639V37.787C256.246 37.787 256.372 42.003 252.194 42.28L252.219 42.305L67.4278 53.884C53.8748 54.727 42.8639 66.469 42.8639 80.049C42.8639 80.049 42.7878 265.699 42.7748 266C42.6368 269.071 40.1069 269.071 38.0179 269.071H33.9538Z"/>
<path d="M299.626 285.546C299.651 285.244 299.676 284.941 299.676 284.639L299.626 67.2738C299.55 66.1288 299.361 65.0088 299.046 63.9388C298.317 61.4338 296.957 59.1818 295.032 57.3818C292.276 54.8018 288.677 53.4048 284.813 53.4048C284.474 53.4048 284.133 53.4168 283.794 53.4428L69.3538 66.8838C69.2788 66.8888 69.2028 66.9018 69.1278 66.9138C69.0268 66.9298 68.9258 66.9468 68.8258 66.9468C62.0048 67.6518 56.2918 73.6168 55.8258 80.4508C55.8008 80.7528 55.8008 81.0428 55.8008 81.3448V294.318C55.8008 294.42 55.8068 294.519 55.8138 294.616C55.8198 294.711 55.8258 294.804 55.8258 294.896C55.9638 299.667 57.8648 304.021 61.2498 307.205C64.2698 310.049 68.1458 311.66 72.3368 311.875H73.0038L287.33 298.899C287.393 298.899 287.456 298.889 287.519 298.88C287.565 298.873 287.611 298.866 287.658 298.862C287.674 298.862 287.691 298.861 287.708 298.861C294.038 297.691 299.184 292.002 299.626 285.546ZM89.4268 288.339C82.0898 288.855 75.5958 286.364 75.7968 276.748V127.08C75.7968 121.946 80.0258 118.661 84.6938 118.421L271.247 107.233C275.904 106.994 279.716 110.367 279.716 115.036V264.968C279.716 270.455 278.345 277.516 268.906 277.881H268.881L268.868 277.893L89.4268 288.339Z"/>
<path d="M132.566 164.787C123.906 165.322 120.962 171.932 120.974 182.09V183.876C119.941 184.119 119.076 184.349 118.03 184.41C111.791 184.799 107.29 179.733 107.278 170.644C107.266 156.744 119.721 143.658 143.452 142.188C164.581 140.875 178.106 151.082 178.131 169.089C178.143 182.636 166.892 192.247 155.811 195.26C176.598 196.282 185.271 207.873 185.295 222.66C185.319 247.97 166.807 262.319 138.222 264.106L137.529 264.154C116.047 265.491 100.965 257.338 100.953 243.255C100.953 235.236 106.827 228.444 115.659 227.897C116.352 227.849 117.045 227.994 117.738 227.946C119.49 242.283 129.197 247.557 138.891 246.961C148.245 246.378 154.825 240.084 154.813 231.165V230.813C154.801 216.901 143.185 216.209 125.693 215.516L122.908 198.93C139.183 195.954 147.32 190.631 147.308 181.008C147.308 170.668 141.567 164.253 132.566 164.811V164.787Z"/>
<path d="M210.681 157.959C193.359 162.965 189.541 155.358 191.438 147.388C201.825 144.958 228.841 136.854 239.058 133.196L239.18 239.987L258.07 242.732C258.07 249.683 254.105 254.032 247.001 254.482C241.114 254.846 227.43 255.345 220.849 255.758C210.632 256.39 191.924 257.921 191.924 257.921C191.401 256.524 191.231 255.114 191.231 253.862C191.231 250.472 192.605 246.998 197.106 245.478L210.79 241.056L210.693 157.971L210.681 157.959Z"/>
</svg>
`,
  },
  siNotionmail: {
    viewBox: "0 0 137 128",
    svg: `<svg viewBox="0 0 137 128" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_138_14)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.54976 56.4501C-1.90024 52.0001 -0.150239 46.7401 4.94976 44.7301L118.62 1.50014C131.98 -3.81986 138.45 6.14014 135.22 13.9801L89.9298 122.02C87.0898 128.86 81.0298 128.86 75.7698 123.6L57.2598 108.06C56.7398 107.59 55.9498 107.67 55.5198 108.21L42.7598 124.6C39.6298 128.62 33.2098 127.02 32.3298 122.01L24.5998 78.1801C24.5298 77.7901 24.3398 77.4501 24.0498 77.1901L2.54976 56.4501ZM71.4676 46.8963C59.6616 55.2842 47.6177 63.8411 34.1698 71.7798L12.2798 52.7798L47.3398 39.1298L121.96 8.97978C124.42 7.98978 126.88 10.3698 125.94 12.8498C113.77 45.0998 98.5898 78.5698 81.8698 114.71C75.3198 112.21 47.0498 85.2698 43.8098 80.4198L59.5698 67.4498C59.5698 67.4498 89.9998 42.0798 92.6498 39.5498C93.8898 38.3698 99.0498 33.6498 104.21 28.9498C105.98 27.3398 104.2 24.8698 102.16 26.1198C91.6099 32.5857 81.6268 39.6784 71.4676 46.8963Z"/>
</g>
<defs>
<clipPath id="clip0_138_14">
<rect width="136.04" height="127.36" />
</clipPath>
</defs>
</svg>
`,
  },
};

type ReplaceRule = {
  /** 요소를 찾기 위한 추가 클래스(없으면 무시) */
  className?: string;
  /** 요소의 aria-label(완전일치). 없으면 무시 */
  ariaLabel?: string;

  /**
   * Simple Icons key.
   * 예: "siOpenai", "siGithub", "siObsidian" ...
   * (simple-icons 패키지에서 export되는 이름)
   */
  simpleIconKey: string;

  /** SVG를 넣을 대상: 기본은 해당 요소 내부의 첫 번째 svg를 교체, 없으면 prepend */
  mode?: "replace-first-svg" | "prepend";

  /** 강제 크기(px). 기본 18 */
  size?: number;

  /** aria-label이 붙은 요소가 버튼/링크가 아닐 수도 있어서, 더 좁히고 싶으면 selector 추가 */
  extraSelector?: string;
};

type PluginSettings = {
  rules: ReplaceRule[];
  debug: boolean;
};

const DEFAULT_SETTINGS: PluginSettings = {
  debug: false,
  rules: [
    {
      className: "clickable-icon",
      ariaLabel: "ChatGPT",
      simpleIconKey: "siChatgpt",
      mode: "replace-first-svg",
      size: 18,
    },
  ],
};

type ResolvedIcon = {
  viewBox: string;
  svg: string;
};

function resolveIcon(key: string): ResolvedIcon | null {
  // 1. Simple Icons
  const si = (simpleIcons as any)[key];
  if (si?.svg) {
    return {
      viewBox: "0 0 24 24",
      svg: si.svg,
    };
  }

  // 2. Custom Icons
  const custom = CUSTOM_ICON_MAP[key];
  if (custom) {
    return {
      viewBox: custom.viewBox ?? "0 0 24 24",
      svg: custom.svg,
    };
  }

  return null;
}

function svgFromIcon(icon: ResolvedIcon, size = 18): SVGSVGElement {
  const wrapper = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  wrapper.setAttribute("viewBox", icon.viewBox);
  wrapper.setAttribute("width", String(size));
  wrapper.setAttribute("height", String(size));
  wrapper.setAttribute("fill", "currentColor");
  wrapper.setAttribute("aria-hidden", "true");

  wrapper.style.display = "inline-block";
  wrapper.style.verticalAlign = "middle";

  wrapper.innerHTML = icon.svg;
  return wrapper;
}

function matchesRule(el: Element, rule: ReplaceRule): boolean {
  if (rule.className && !el.classList.contains(rule.className)) return false;
  if (rule.ariaLabel) {
    const aria = el.getAttribute("aria-label") ?? "";
    if (aria !== rule.ariaLabel) return false;
  }
  if (rule.extraSelector) {
    // el 자체 또는 자식 중 extraSelector를 만족해야 하는 경우를 지원
    if (
      !(el.matches(rule.extraSelector) || el.querySelector(rule.extraSelector))
    )
      return false;
  }
  return true;
}

function markPatched(el: Element, key: string) {
  el.setAttribute("data-si-patched", key);
}
function isPatched(el: Element, key: string): boolean {
  return el.getAttribute("data-si-patched") === key;
}

export default class SimpleIconOverlayPlugin extends Plugin {
  settings: PluginSettings;
  private observer: MutationObserver | null = null;

  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());

    this.addSettingTab(new SimpleIconOverlaySettingTab(this.app, this));

    // 최초 적용
    this.applyAllRules(document.body);

    // UI 갱신 대응: MutationObserver
    this.observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        // 추가된 노드들만 스캔
        for (const node of Array.from(m.addedNodes)) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          this.applyAllRules(node as Element);
        }
        // 속성 변경(aria-label 변경 등) 대응
        if (m.type === "attributes" && m.target instanceof Element) {
          this.applyAllRules(m.target);
        }
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-label", "class"],
    });

    // Obsidian 레이아웃 변경 시에도 한번 더
    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.applyAllRules(document.body);
      })
    );
  }

  onunload() {
    if (this.observer) this.observer.disconnect();
    this.observer = null;
  }

  private log(...args: any[]) {
    if (this.settings.debug) console.log("[simple-icons-overlay]", ...args);
  }

  /**
   * 특정 root 아래에서 rules에 매칭되는 요소를 찾아 아이콘을 교체
   */
  private applyAllRules(root: Element) {
    const rules = this.settings.rules ?? [];
    if (rules.length === 0) return;

    // 성능: root 자신도 검사 + root 내부도 검사
    const candidates: Element[] = [
      root,
      ...Array.from(root.querySelectorAll("*")),
    ];

    for (const el of candidates) {
      for (const rule of rules) {
        // 매칭 체크(빠르게)
        if (!matchesRule(el, rule)) continue;

        const key = rule.simpleIconKey;
        if (isPatched(el, key)) continue;

        const icon = resolveIcon(key);
        if (!icon) {
          this.log("Icon key not found:", key);
          continue;
        }

        const mode = rule.mode ?? "replace-first-svg";
        const size = rule.size ?? 18;

        try {
          const svg = svgFromIcon(icon, size);

          if (mode === "replace-first-svg") {
            // 보통 버튼 내부에 svg.lucide 가 있음 → 그걸 교체
            const oldSvg = el.querySelector("svg");
            if (oldSvg) {
              oldSvg.replaceWith(svg);
              markPatched(el, key);
              this.log("Replaced svg on", el, "with", key);
            } else {
              // svg가 없으면 prepend로 fallback
              el.prepend(svg);
              markPatched(el, key);
              this.log("Prepended svg (fallback) on", el, "with", key);
            }
          } else {
            el.prepend(svg);
            markPatched(el, key);
            this.log("Prepended svg on", el, "with", key);
          }
        } catch (e) {
          this.log("Failed to patch element:", e, el, rule);
        }
      }
    }
  }

  async saveSettings() {
    await this.saveData(this.settings);
    // 설정 변경 즉시 재적용
    this.applyAllRules(document.body);
  }
}

class SimpleIconOverlaySettingTab extends PluginSettingTab {
  plugin: SimpleIconOverlayPlugin;

  constructor(app: App, plugin: SimpleIconOverlayPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Debug log")
      .setDesc("콘솔에 패치 로그를 출력합니다.")
      .addToggle((t) =>
        t.setValue(this.plugin.settings.debug).onChange(async (v) => {
          this.plugin.settings.debug = v;
          await this.plugin.saveSettings();
        })
      );

    containerEl.createEl("h3", { text: "Rules" });

    // 단순 JSON 편집 UI(빠르게 쓰기 좋음)
    const desc = containerEl.createEl("p", {
      text: "rules를 JSON으로 편집합니다. simpleIconKey는 예: siGithub, siOpenai 처럼 simple-icons export 이름을 씁니다.",
    });
    desc.style.opacity = "0.8";

    const textarea = containerEl.createEl("textarea");
    textarea.style.width = "100%";
    textarea.style.height = "260px";
    textarea.value = JSON.stringify(this.plugin.settings.rules, null, 2);

    const btnRow = containerEl.createDiv({ cls: "setting-item" });

    const saveBtn = btnRow.createEl("button", { text: "Save rules" });
    saveBtn.onclick = async () => {
      try {
        const parsed = JSON.parse(textarea.value) as ReplaceRule[];
        this.plugin.settings.rules = parsed;
        await this.plugin.saveSettings();
      } catch (e) {
        new Notice("rules JSON 파싱 실패: 콘솔을 확인하세요.");
        console.error(e);
      }
    };

    const resetBtn = btnRow.createEl("button", { text: "Reset to defaults" });
    resetBtn.style.marginLeft = "8px";
    resetBtn.onclick = async () => {
      this.plugin.settings.rules = DEFAULT_SETTINGS.rules;
      textarea.value = JSON.stringify(this.plugin.settings.rules, null, 2);
      await this.plugin.saveSettings();
    };
  }
}
