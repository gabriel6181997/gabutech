import type { CheerioAPI } from "cheerio";
import hljs from "highlight.js";

export const addClassNames = ($: CheerioAPI) => {
  $("h2").each((_, element) => {
    $(element).addClass("text-2xl p-3 bg-blue-200 border-l-4 border-blue-900 font-bold mb-4");
  });

  $("h3").each((_, element) => {
    $(element).addClass("text-blue-900 text-xl border-b-2 border-blue-900 font-bold mb-4");
  });

  $("h4").each((_, element) => {
    $(element).addClass("text-blue-900 underline font-bold mb-4");
  });

  $("h5").each((_, element) => {
    $(element).addClass("text-blue-900 underline font-bold mb-4");
  });

  $("p").each((_, element) => {
    $(element).addClass("mb-4");
  });

  $("ul").each((_, element) => {
    $(element).addClass(
      "py-4 px-8 m-4 bg-blue-50 border border-black border-dashed list-disc dark:bg-gray-800 dark:border-white"
    );
  });

  $("pre").each((_, element) => {
    $(element).addClass("hljs block bg-blue-100 rounded-sm overflow-x-auto");
  });

  $("pre code").each((_, element) => {
    const result = hljs.highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass("p-2 block");
  });
  
  return $;
};
