import esbuild from "esbuild";
import process from "process";

const isProd = process.argv[2] === "production";

await esbuild.build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: ["obsidian"],
  format: "cjs",
  target: "es2020",
  platform: "browser",
  sourcemap: isProd ? false : "inline",
  minify: isProd,
  outfile: "main.js",
});

console.log(isProd ? "Built (production)" : "Built (development)");
