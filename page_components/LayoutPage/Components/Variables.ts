import { toCanvas, toJpeg, toPng } from "html-to-image";
import { formatDate } from "../../../lib/utilities";
import { pageRangeIndex, pageSizesInPx } from "../../../constants/pageSizes";

import { LayoutListType } from "../../../components/Page/Contents/PageDirectory";

export enum PageSettingTypes {
  COMPLETED_LAYOUT,
  EDITABLE_LAYOUT,
}

const formDB = {
  // Print
  print_general: {
    name: "print_general",
    template: [
      {
        title: "Output Settings",
        template: [
          {
            id: "fileName",
            title: "Output Name",
            type: "input",
          },
          {
            id: "quality",
            title: "Image Quality",
            type: "range",
            range: {
              min: 1,
              max: 5,
            },
          },
          {
            id: "exportType",
            title: "Image Export Type",
            type: "select",
            options: [
              { value: "PNG", label: "PNG" },
              //{value: "PNG", label: "PNG (Slightly Better Quality)"},
            ],
          },
        ],
      },
    ],
    default: () => ({
      quality: 2,
      exportType: "JPEG",
      fileName: "PDF",
    }),
    defaultStatic: [2, "JPEG", "Test"],
  },

  // Layout
  general: {
    name: "general",
    template: [
      {
        title: "General Settings",
        template: [
          {
            id: "name",
            title: "Project Name",
            type: "input",
          },
          {
            id: "pagesize",
            title: "Page Size",
            type: "select",
            options: Object.keys(pageSizesInPx).map((e) => ({
              label: e.split("(")[0].trim(),
              value: JSON.stringify(pageSizesInPx[e]),
            })),
          },
          {
            id: "pagetype",
            title: "Page and Print Type",
            type: "select",
            options: Object.keys(pageRangeIndex).map((e) => ({
              label: e,
              value: pageRangeIndex[e],
            })),
          },
          {
            id: "pagebleed",
            title: "Page Bleed",
            type: "select",
            options: ["Bleed", "No Bleed"].map((e) => ({
              label: e,
              value: e.indexOf("No") === -1,
            })),
          },
          {
            id: "pdfSettings",
            title: "PDF Settings",
            type: "select",
            options: [
              {
                label: "Completed Layout",
                value: PageSettingTypes.COMPLETED_LAYOUT,
              },
              {
                label: "Editable Layout (For Canva/Others) (Early Beta)",
                value: PageSettingTypes.EDITABLE_LAYOUT,
              },
            ],
          },
        ],
      },
    ],
    default: () => ({
      name: `New Project -${formatDate(Date.now())}-`,
      pagesize: "[816,1056]",
      pagetype: 0,
      pagebleed: false,
      pdfSettings: PageSettingTypes.COMPLETED_LAYOUT,
      page_border: {
        imageUrl: "/static/img.png",
        borderSides: {
          left: false,
          right: false,
          bottom: false,
          top: false,
        },
        imageSize: 50,
      },
    }),
    defaultStatic: [
      `New Project -${formatDate(Date.now())}-`,
      "[816,1056]",
      0,
      false,
    ],
  },

  // General Page
  i_titleBasic: {
    name: "i_titleBasic",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "title",
            title: "Main Title",
            type: "input",
          },
        ],
      },
    ],
    default: (title) => ({
      title: title,
    }),
    defaultStatic: ["Title Page"],
  },
  i_titleRunning: {
    name: "i_titleRunning",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "title",
            title: "Main Title",
            type: "input",
          },
          {
            id: "subtitle",
            title: "Subtitle",
            type: "input",
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (title, subtitle, margin) => ({
      title: title,
      subtitle: subtitle,
      margin: margin,
    }),
    defaultStatic: ["Title", "Subtitle", 35],
  },

  // Activity Page
  i_basic: {
    name: "i_basic",
    template: [
      {
        title: "Board Settings",
        template: [
          {
            id: "boardCountRow",
            title: "Boards per Column ",
            type: "range",
            range: {
              min: 1,
              max: 5,
            },
          },
          {
            id: "boardCountColumn",
            title: "Boards Per Row",
            type: "range",
            range: {
              min: 1,
              max: 5,
            },
          },
          {
            id: "boardGap",
            title: "Boards Gap",
            type: "range",
            range: {
              min: 0,
              max: 500,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: () => ({
      margin: 35,
      boardCountRow: 2,
      boardCountColumn: 2,
      boardGap: 75,
    }),
    defaultStatic: [35, 2, 2, 75],
  },

  // No Content Page
  i_blank: {
    name: "i_blank",
    template: [
      {
        title: "Content Options",
        template: [],
      },
    ],
    default: () => ({}),
    defaultStatic: [],
  },
  i_notebook: {
    name: "i_notebook",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "ruling",
            title: "Page Space Type",
            type: "select",
            options: [
              {
                label: "Narrow",
                value: 0,
              },
              {
                label: "Medium",
                value: 1,
              },
              {
                label: "Wide",
                value: 2,
              },
              {
                label: "UK Pitman",
                value: 3,
              },
              {
                label: "US Gregg Short.",
                value: 4,
              },
              {
                label: "Low Vision",
                value: 5,
              },
            ],
          },
          {
            id: "topMargin",
            title: "Top Spacing",
            type: "range",
            range: {
              min: 0,
              max: 300,
            },
          },
          {
            id: "sideMargin",
            title: "Side Line",
            type: "range",
            range: {
              min: 0,
              max: 300,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, topMargin, sideMargin, pages, ruling) => ({
      margin: margin,
      topMargin: topMargin,
      sideMargin: sideMargin,
      pages: pages,
      ruling: ruling,
    }),
    defaultStatic: [35, 21, 32, 1, 1],
  },
  i_history: {
    name: "i_history",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "gaps",
            title: "History Gaps",
            type: "range",
            range: {
              min: 0,
              max: 10,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, gaps, margin) => ({
      margin: margin,
      gaps: gaps,
      pages: pages,
    }),
    defaultStatic: [1, 5, 35],
  },
  i_callig: {
    name: "i_callig",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin) => ({
      margin: margin,
      pages: pages,
    }),
    defaultStatic: [1, 35],
  },
  i_cornell: {
    name: "i_cornell",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin) => ({
      margin: margin,
      pages: pages,
    }),
    defaultStatic: [1, 35],
  },
  i_cursive: {
    name: "i_cursive",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin) => ({
      margin: margin,
      pages: pages,
    }),
    defaultStatic: [1, 35],
  },
  i_dots: {
    name: "i_dots",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "gap",
            title: "Dot Gap",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, gap) => ({
      margin: margin,
      pages: pages,
      gap: gap,
    }),
    defaultStatic: [1, 35, 20],
  },
  i_french: {
    name: "i_french",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "topMargin",
            title: "Top Spacing",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "sideMargin",
            title: "Side Spacing",
            type: "range",
            range: {
              min: 0,
              max: 200,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, topMargin, sideMargin, pages) => ({
      margin: margin,
      topMargin: topMargin,
      sideMargin: sideMargin,
      pages: pages,
    }),
    defaultStatic: [35, 21, 21, 1],
  },
  i_graph: {
    name: "i_graph",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "gap",
            title: "Line Gap",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, gap) => ({
      margin: margin,
      pages: pages,
      gap: gap,
    }),
    defaultStatic: [1, 35, 10],
  },
  i_handwriting: {
    name: "i_handwriting",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin) => ({
      margin: margin,
      pages: pages,
    }),
    defaultStatic: [1, 35],
  },
  i_hexagon: {
    name: "i_hexagon",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "gap",
            title: "Hexagon Scale",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, gap) => ({
      margin: margin,
      pages: pages,
      gap: gap,
    }),
    defaultStatic: [1, 35, 50],
  },
  i_isometric: {
    name: "i_isometric",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "gap",
            title: "Pattern Scale",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, gap) => ({
      margin: margin,
      pages: pages,
      gap: gap,
    }),
    defaultStatic: [1, 35, 50],
  },
  i_sketch: {
    name: "i_sketch",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "marginTop",
            title: "Top Margin",
            type: "range",
            range: {
              min: 0,
              max: 300,
            },
          },
          {
            id: "borderRadius",
            title: "Border Radius",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, topMargin, borderRadius) => ({
      pages: pages,
      margin: margin,
      marginTop: topMargin,
      borderRadius: borderRadius,
    }),
    defaultStatic: [1, 35, 20, 25],
  },
  i_dotboxes: {
    name: "i_dotboxes",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "stretch",
            title: "Stretch Image",
            type: "select",
            options: [
              {
                label: "True",
                value: true,
              },
              {
                label: "False",
                value: false,
              },
            ],
          },
          {
            id: "scaleX",
            title: "Scale Image X",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "scaleY",
            title: "Scale Image Y",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, stretch, scaleX, scaleY) => ({
      margin: margin,
      pages: pages,
      stretch: stretch,
      scaleX: scaleX,
      scaleY: scaleY,
    }),
    defaultStatic: [1, 35, false, 50, 50],
  },
  i_wideruled: {
    name: "i_wideruled",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "stretch",
            title: "Stretch Image",
            type: "select",
            options: [
              {
                label: "True",
                value: true,
              },
              {
                label: "False",
                value: false,
              },
            ],
          },
          {
            id: "scaleX",
            title: "Scale Image X",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "scaleY",
            title: "Scale Image Y",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, stretch, scaleX, scaleY) => ({
      margin: margin,
      pages: pages,
      stretch: stretch,
      scaleX: scaleX,
      scaleY: scaleY,
    }),
    defaultStatic: [1, 35, false, 50, 50],
  },
  i_comic: {
    name: "i_comic",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "Page Count",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "type",
            title: "Frame Style",
            type: "select",
            options: [
              {
                label: "1",
                value: 0,
              },
              {
                label: "2",
                value: 1,
              },
              {
                label: "3",
                value: 2,
              },
              {
                label: "4",
                value: 3,
              },
              {
                label: "5",
                value: 4,
              },
              {
                label: "6",
                value: 5,
              },
            ],
          },
          {
            id: "stretch",
            title: "Stretch Image",
            type: "select",
            options: [
              {
                label: "True",
                value: true,
              },
              {
                label: "False",
                value: false,
              },
            ],
          },
          {
            id: "scaleX",
            title: "Scale Image X",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "scaleY",
            title: "Scale Image Y",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (pages, margin, type, stretch, scaleX, scaleY) => ({
      margin: margin,
      pages: pages,
      type: type,
      stretch: stretch,
      scaleX: scaleX,
      scaleY: scaleY,
    }),
    defaultStatic: [1, 35, 0, false, 50, 50],
  },

  i_weeklyplanner: {
    name: "i_weeklyplanner",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Months",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "startDay",
            title: "Stary Day At",
            type: "select",
            options: [
              {
                label: "Sunday",
                value: 0,
              },
              {
                label: "Monday",
                value: 1,
              },
              {
                label: "Saturday",
                value: -1,
              },
            ],
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages, startDay) => {
      return {
        margin: margin,
        pages: pages,
        startDay: startDay,
      };
    },
    defaultStatic: [35, 1, 0],
  },
  i_monthlyplanner: {
    name: "i_monthlyplanner",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Months",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "startYear",
            title: "Start Year At",
            type: "number",
            range: {
              min: 1975,
              max: 3000,
            },
          },
          /*
          {
            id: "startMonth",
            title: "Stary Month At",
            type: "select",
            options: monthsFull.map((e,i) => {
              return {
                label: e,
                value: i,
              }
            })
          },
          */
          {
            id: "startDay",
            title: "Stary Day At",
            type: "select",
            options: [
              {
                label: "Sunday",
                value: 0,
              },
              {
                label: "Monday",
                value: 1,
              },
              {
                label: "Saturday",
                value: -1,
              },
            ],
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages, startDay, startMonth, startYear) => {
      return {
        margin: margin,
        pages: pages,
        startDay: startDay,
        startMonth: startMonth,
        startYear: startYear,
      };
    },
    defaultStatic: [35, 1, 0, 0, 2022],
  },
  i_dailyplanner: {
    name: "i_dailyplanner",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages) => {
      return {
        margin: margin,
        pages: pages,
      };
    },
    defaultStatic: [35, 1],
  },
  i_yearlyplanner: {
    name: "i_yearlyplanner",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Years",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "startYear",
            title: "Start Year At",
            type: "number",
            range: {
              min: 1975,
              max: 3000,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages, startYear) => {
      return {
        margin: margin,
        pages: pages,
        startYear: startYear,
      };
    },
    defaultStatic: [35, 1, 2022],
  },
  i_dailybudget: {
    name: "i_dailybudget",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages) => {
      return {
        margin: margin,
        pages: pages,
      };
    },
    defaultStatic: [35, 1],
  },
  i_monthlybudget: {
    name: "i_monthlybudget",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages) => {
      return {
        margin: margin,
        pages: pages,
      };
    },
    defaultStatic: [35, 1],
  },
  i_birthday: {
    name: "i_birthday",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages) => {
      return {
        margin: margin,
        pages: pages,
      };
    },
    defaultStatic: [35, 1],
  },
  i_notes: {
    name: "i_notes",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "rows",
            title: "How Many Rows",
            type: "number",
            range: {
              min: 5,
              max: 15,
            },
          },
          {
            id: "columns",
            title: "How Many Columns",
            type: "number",
            range: {
              min: 1,
              max: 4,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages, columns, rows) => {
      return {
        margin: margin,
        pages: pages,
        columns: columns,
        rows: rows,
      };
    },
    defaultStatic: [35, 1, 2, 8],
  },
  i_pass: {
    name: "i_pass",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages) => {
      return {
        margin: margin,
        pages: pages,
      };
    },
    defaultStatic: [35, 1],
  },
  i_todo: {
    name: "i_todo",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages) => {
      return {
        margin: margin,
        pages: pages,
      };
    },
    defaultStatic: [35, 1],
  },
  i_address: {
    name: "i_address",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Days",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "columns",
            title: "How Many Columns",
            type: "number",
            range: {
              min: 6,
              max: 12,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages, columns) => {
      return {
        margin: margin,
        pages: pages,
        columns: columns,
      };
    },
    defaultStatic: [35, 1, 8],
  },
  i_calendar: {
    name: "i_calendar",
    template: [
      {
        title: "Content Options",
        template: [
          {
            id: "pages",
            title: "How Many Months",
            type: "number",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "startYear",
            title: "Start Year At",
            type: "number",
            range: {
              min: 1975,
              max: 3000,
            },
          },
          {
            id: "startDay",
            title: "Stary Day At",
            type: "select",
            options: [
              {
                label: "Sunday",
                value: 0,
              },
              {
                label: "Monday",
                value: 1,
              },
              {
                label: "Saturday",
                value: -1,
              },
            ],
          },
          {
            id: "boardGap",
            title: "Boards Gap",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
          {
            id: "margin",
            title: "Page Margin",
            type: "range",
            range: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    ],
    default: (margin, pages, startDay, startMonth, startYear, boardGap) => {
      return {
        margin: margin,
        pages: pages,
        startDay: startDay,
        startMonth: startMonth,
        startYear: startYear,
        boardGap: boardGap,
      };
    },
    defaultStatic: [35, 1, 0, 0, 2022, 10],
  },
};
const formDefaultValue = {};
const form: any = {};

for (let [k, v] of Object.entries(formDB)) {
  formDefaultValue[k] = v.default;
  form[k] = v.template;
}

export { formDefaultValue, form };

// ==============================

export enum bookTypes {
  activity = 0,
  noContent = 1,
  lowContent = 2,
}

export const dateCountBy = {
  day: 60000 * 60 * 24,
  week: 60000 * 60 * 24 * 7,
  month: 60000 * 60 * 24 * 30,
  year: 60000 * 60 * 24 * 365,
};

// ==============================

let iLActivityBooks = {
  "Title Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerSimpleTitle.type,
          title: LayoutListType.PageMakerSimpleTitle.title,
          rawPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_titleBasic.name,
        param: formDB.i_titleBasic.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerSimpleTitle.class, list: _layoutList },
    ],
  },
  "Running Title": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerRunningTitle.type,
          title: LayoutListType.PageMakerRunningTitle.title,
          subtitle: LayoutListType.PageMakerRunningTitle.subtitle,
          rawPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_titleRunning.name,
        param: formDB.i_titleRunning.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerRunningTitle.class, list: _layoutList },
    ],
  },
  // To Create New page Type, you have to first define them on
  /*
    1 - LayoutListType
    2 - formDB
  */
};

let iLNoContentBooks = {
  "Notebook Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerNotebook.type,
          title: LayoutListType.PageMakerNotebook.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_notebook.name,
        param: formDB.i_notebook.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerNotebook.class, list: _layoutList },
    ],
  },
  "Graphing Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerGraph.type,
          title: LayoutListType.PageMakerGraph.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_graph.name,
        param: formDB.i_graph.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerGraph.class, list: _layoutList },
    ],
  },
  "Comics Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerComics.type,
          title: LayoutListType.PageMakerComics.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_comic.name,
        param: formDB.i_comic.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerComics.class, list: _layoutList },
    ],
  },
  "Sketch Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerSketch.type,
          title: LayoutListType.PageMakerSketch.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_sketch.name,
        param: formDB.i_sketch.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerSketch.class, list: _layoutList },
    ],
  },
  "Cursive Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerCursive.type,
          title: LayoutListType.PageMakerCursive.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_cursive.name,
        param: formDB.i_cursive.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerCursive.class, list: _layoutList },
    ],
  },
  "Blank Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerBlank.type,
          title: LayoutListType.PageMakerBlank.title,
          rawPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_blank.name,
        param: formDB.i_blank.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerBlank.class, list: _layoutList },
    ],
  },
  "Wide Ruled Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerWideRuled.type,
          title: LayoutListType.PageMakerWideRuled.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_wideruled.name,
        param: formDB.i_wideruled.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerWideRuled.class, list: _layoutList },
    ],
  },
  "French Ruled Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerFrenchRuled.type,
          title: LayoutListType.PageMakerFrenchRuled.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_french.name,
        param: formDB.i_french.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerFrenchRuled.class, list: _layoutList },
    ],
  },
  "Handwriting Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerHandwriting.type,
          title: LayoutListType.PageMakerHandwriting.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_handwriting.name,
        param: formDB.i_handwriting.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerHandwriting.class, list: _layoutList },
    ],
  },

  "Blank History Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerHistorybook.type,
          title: LayoutListType.PageMakerHistorybook.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_history.name,
        param: formDB.i_history.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerHistorybook.class, list: _layoutList },
    ],
  },
  "Calligraphy Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerCalligraphy.type,
          title: LayoutListType.PageMakerCalligraphy.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_callig.name,
        param: formDB.i_callig.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerCalligraphy.class, list: _layoutList },
    ],
  },
  "Cornell Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerCornell.type,
          title: LayoutListType.PageMakerCornell.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_cornell.name,
        param: formDB.i_cornell.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerCornell.class, list: _layoutList },
    ],
  },
  "Dot Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerDots.type,
          title: LayoutListType.PageMakerDots.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dots.name,
        param: formDB.i_dots.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerDots.class, list: _layoutList },
    ],
  },
  "Hexagon Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerHexagon.type,
          title: LayoutListType.PageMakerHexagon.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_hexagon.name,
        param: formDB.i_hexagon.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerHexagon.class, list: _layoutList },
    ],
  },
  "Isometric Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerIsometric.type,
          title: LayoutListType.PageMakerIsometric.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_isometric.name,
        param: formDB.i_isometric.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerIsometric.class, list: _layoutList },
    ],
  },
  "Dot Boxes Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerDotBox.type,
          title: LayoutListType.PageMakerDotBox.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dotboxes.name,
        param: formDB.i_dotboxes.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerDotBox.class, list: _layoutList },
    ],
  },

  "Title Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMakerSimpleTitle.type,
          title: LayoutListType.PageMakerSimpleTitle.title,
          rawPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_titleBasic.name,
        param: formDB.i_titleBasic.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMakerSimpleTitle.class, list: _layoutList },
    ],
  },
  // To Create New page Type, you have to first define them on
  /*
    1 - LayoutListType
    2 - formDB
  */
};

let iLLowContentBooks = {
  "Weekly Planner 1 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner1.type,
          title: LayoutListType.PageWeeklyPlanner1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner1.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Weekly Planner 2 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner2.type,
          title: LayoutListType.PageWeeklyPlanner2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner2.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Weekly Planner 3 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner3.type,
          title: LayoutListType.PageWeeklyPlanner3.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner3.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Weekly Planner 4 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner4.type,
          title: LayoutListType.PageWeeklyPlanner4.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner4.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Weekly Planner 5 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner5.type,
          title: LayoutListType.PageWeeklyPlanner5.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner5.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Weekly Planner 6 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner6.type,
          title: LayoutListType.PageWeeklyPlanner6.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner6.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Weekly Planner 7 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageWeeklyPlanner7.type,
          title: LayoutListType.PageWeeklyPlanner7.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_weeklyplanner.name,
        param: formDB.i_weeklyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageWeeklyPlanner7.class, list: _layoutList },
    ],
    group: "Weekly Planner",
  },
  "Monthly Planner 1 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMonthlyPlanner1.type,
          title: LayoutListType.PageMonthlyPlanner1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_monthlyplanner.name,
        param: formDB.i_monthlyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMonthlyPlanner1.class, list: _layoutList },
    ],
    group: "Monthly Planner",
  },
  "Monthly Planner 2 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMonthlyPlanner2.type,
          title: LayoutListType.PageMonthlyPlanner2.title,
          rawPage: true,
          multiPage: true,
          multiPageBatch: 2,
        },
        list: _finData,
      },
      {
        type: formDB.i_monthlyplanner.name,
        param: formDB.i_monthlyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMonthlyPlanner2.class, list: _layoutList },
    ],
    group: "Monthly Planner",
  },
  "Monthly Planner 3 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMonthlyPlanner3.type,
          title: LayoutListType.PageMonthlyPlanner3.title,
          rawPage: true,
          multiPage: true,
          multiPageBatch: 2,
        },
        list: _finData,
      },
      {
        type: formDB.i_monthlyplanner.name,
        param: formDB.i_monthlyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMonthlyPlanner3.class, list: _layoutList },
    ],
    group: "Monthly Planner",
  },
  "Daily Planner 1 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyPlanner1.type,
          title: LayoutListType.PageDailyPlanner1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailyplanner.name,
        param: formDB.i_dailyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyPlanner1.class, list: _layoutList },
    ],
    group: "Daily Planner",
  },
  "Daily Planner 2 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyPlanner2.type,
          title: LayoutListType.PageDailyPlanner2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailyplanner.name,
        param: formDB.i_dailyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyPlanner2.class, list: _layoutList },
    ],
    group: "Daily Planner",
  },
  "Daily Planner 3 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyPlanner3.type,
          title: LayoutListType.PageDailyPlanner3.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailyplanner.name,
        param: formDB.i_dailyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyPlanner3.class, list: _layoutList },
    ],
    group: "Daily Planner",
  },
  "Daily Planner 4 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyPlanner4.type,
          title: LayoutListType.PageDailyPlanner4.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailyplanner.name,
        param: formDB.i_dailyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyPlanner4.class, list: _layoutList },
    ],
    group: "Daily Planner",
  },
  "Daily Planner 5 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyPlanner5.type,
          title: LayoutListType.PageDailyPlanner5.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailyplanner.name,
        param: formDB.i_dailyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyPlanner5.class, list: _layoutList },
    ],
    group: "Daily Planner",
  },
  "Daily Planner 6 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyPlanner6.type,
          title: LayoutListType.PageDailyPlanner6.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailyplanner.name,
        param: formDB.i_dailyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyPlanner6.class, list: _layoutList },
    ],
    group: "Daily Planner",
  },
  "Yearly Planner 1 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageYearlyPlanner1.type,
          title: LayoutListType.PageYearlyPlanner1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_yearlyplanner.name,
        param: formDB.i_yearlyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageYearlyPlanner1.class, list: _layoutList },
    ],
  },
  "Yearly Planner 2 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageYearlyPlanner2.type,
          title: LayoutListType.PageYearlyPlanner2.title,
          rawPage: true,
          multiPage: true,
          multiPageBatch: 2,
        },
        list: _finData,
      },
      {
        type: formDB.i_yearlyplanner.name,
        param: formDB.i_yearlyplanner.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageYearlyPlanner2.class, list: _layoutList },
    ],
  },
  "Daily Budget 1 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyBudget1.type,
          title: LayoutListType.PageDailyBudget1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailybudget.name,
        param: formDB.i_dailybudget.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyBudget1.class, list: _layoutList },
    ],
  },
  "Daily Budget 2 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageDailyBudget2.type,
          title: LayoutListType.PageDailyBudget2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_dailybudget.name,
        param: formDB.i_dailybudget.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageDailyBudget2.class, list: _layoutList },
    ],
  },
  "Monthly Budget 1 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMonthlyBudget1.type,
          title: LayoutListType.PageMonthlyBudget1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_monthlybudget.name,
        param: formDB.i_monthlybudget.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMonthlyBudget1.class, list: _layoutList },
    ],
  },
  "Monthly Budget 2 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMonthlyBudget2.type,
          title: LayoutListType.PageMonthlyBudget2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_monthlybudget.name,
        param: formDB.i_monthlybudget.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMonthlyBudget2.class, list: _layoutList },
    ],
  },
  "Monthly Budget 3 Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageMonthlyBudget3.type,
          title: LayoutListType.PageMonthlyBudget3.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_monthlybudget.name,
        param: formDB.i_monthlybudget.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageMonthlyBudget3.class, list: _layoutList },
    ],
  },
  "Notes Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageNotes1.type,
          title: LayoutListType.PageNotes1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_notes.name,
        param: formDB.i_notes.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageNotes1.class, list: _layoutList },
    ],
  },
  "Birthday Page": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageNotes2.type,
          title: LayoutListType.PageNotes2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_birthday.name,
        param: formDB.i_birthday.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageNotes2.class, list: _layoutList },
    ],
  },
  "Password Log 1": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PasswordLog1.type,
          title: LayoutListType.PasswordLog1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_pass.name,
        param: formDB.i_pass.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PasswordLog1.class, list: _layoutList },
    ],
  },
  "Password Log 2": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PasswordLog2.type,
          title: LayoutListType.PasswordLog2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_pass.name,
        param: formDB.i_pass.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PasswordLog2.class, list: _layoutList },
    ],
  },
  "To Do 1": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageToDo1.type,
          title: LayoutListType.PageToDo1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_todo.name,
        param: formDB.i_todo.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageToDo1.class, list: _layoutList },
    ],
  },
  "To Do 2": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageToDo2.type,
          title: LayoutListType.PageToDo2.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_todo.name,
        param: formDB.i_todo.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageToDo2.class, list: _layoutList },
    ],
  },
  "Monthly To Do": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageToDo3.type,
          title: LayoutListType.PageToDo3.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_todo.name,
        param: formDB.i_todo.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageToDo3.class, list: _layoutList },
    ],
  },
  "Address Card": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageAddressCard.type,
          title: LayoutListType.PageAddressCard.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_address.name,
        param: formDB.i_address.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageAddressCard.class, list: _layoutList },
    ],
  },
  "Calendar 1": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageCalendar1.type,
          title: LayoutListType.PageCalendar1.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_calendar.name,
        param: formDB.i_calendar.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageCalendar1.class, list: _layoutList },
    ],
  },
  "Calendar 2": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageCalendar2.type,
          title: LayoutListType.PageCalendar2.title,
          rawPage: true,
          multiPage: true,
          multiPageBatch: 6,
        },
        list: _finData,
      },
      {
        type: formDB.i_calendar.name,
        param: formDB.i_calendar.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageCalendar2.class, list: _layoutList },
    ],
  },
  "Calendar 3": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageCalendar3.type,
          title: LayoutListType.PageCalendar3.title,
          rawPage: true,
          multiPage: true,
          multiPageBatch: 2,
        },
        list: _finData,
      },
      {
        type: formDB.i_calendar.name,
        param: formDB.i_calendar.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageCalendar3.class, list: _layoutList },
    ],
  },
  "Calendar 4": {
    dataBoard: (name, _finData, _fDList, _fDType, _layoutList) => [
      name,
      {
        data: {
          id: name,
          type: LayoutListType.PageCalendar4.type,
          title: LayoutListType.PageCalendar4.title,
          rawPage: true,
          multiPage: true,
        },
        list: _finData,
      },
      {
        type: formDB.i_calendar.name,
        param: formDB.i_calendar.defaultStatic,
        prefill: false,
        list: _fDList,
        typeList: _fDType,
      },
      { data: LayoutListType.PageCalendar4.class, list: _layoutList },
    ],
  },
};

// ==============================

export const insertableList: any = {
  [bookTypes.activity]: iLActivityBooks,
  [bookTypes.noContent]: iLNoContentBooks,
  [bookTypes.lowContent]: iLLowContentBooks,
};

// ==============================

export const loopDelay = 150,
  retryDelay = 250;

export const imgProcessor = {
  PNG: toPng,
  JPEG: toJpeg,
  CANVAS: toCanvas,
};
