import { loadBoardData, PageMakerGameBoard } from "./BoardsLayout";
import { PageMakerRunningTitle } from "./RunningTitlePage";
import { PageMakerSimpleTitle } from "./SimpleTitlePage";
import { PageMakerBlank } from "./BlankPage";




export const LayoutList = {
  // General
  PageMakerSimpleTitle: PageMakerSimpleTitle,
  PageMakerRunningTitle: PageMakerRunningTitle,

  // Activity
  PageMakerGameBoard: PageMakerGameBoard,

  // No Content
  PageMakerBlank: PageMakerBlank,



};

const LayoutListType: any = {
  PageMakerSimpleTitle: {
    class: "PageMakerSimpleTitle",
    type: 1,
    title: "Title Page",
  },
  PageMakerRunningTitle: {
    class: "PageMakerRunningTitle",
    type: 2,
    title: "Running Title",
  },

  PageMakerGameBoard: {
    class: "PageMakerGameBoard",
    type: 0,
    title: "Game Board",
  },

  PageMakerBlank: { class: "PageMakerBlank", type: 4, title: "Blank Page" },
  PageMakerNotebook: {
    class: "PageMakerNotebook",
    type: 3,
    title: "Notebook Page",
  },
  PageMakerHistorybook: {
    class: "PageMakerHistorybook",
    type: 5,
    title: "Blank History Page",
  },
  PageMakerCalligraphy: {
    class: "PageMakerCalligraphy",
    type: 6,
    title: "Calligraphy Page",
  },
  PageMakerCornell: {
    class: "PageMakerCornell",
    type: 7,
    title: "Cornell Page",
  },
  PageMakerCursive: {
    class: "PageMakerCursive",
    type: 8,
    title: "Cursive Page",
  },
  PageMakerDots: { class: "PageMakerDots", type: 9, title: "Dots Page" },
  PageMakerFrenchRuled: {
    class: "PageMakerFrenchRuled",
    type: 10,
    title: "French Ruled Page",
  },
  PageMakerGraph: { class: "PageMakerGraph", type: 11, title: "Graphing Page" },
  PageMakerHandwriting: {
    class: "PageMakerHandwriting",
    type: 12,
    title: "Handwriting Page",
  },
  PageMakerHexagon: {
    class: "PageMakerHexagon",
    type: 13,
    title: "Hexagon Page",
  },
  PageMakerIsometric: {
    class: "PageMakerIsometric",
    type: 14,
    title: "Isometric Page",
  },
  PageMakerSketch: { class: "PageMakerSketch", type: 15, title: "Sketch Page" },
  PageMakerDotBox: {
    class: "PageMakerDotBox",
    type: 16,
    title: "Dot Boxes Page",
  },
  PageMakerWideRuled: {
    class: "PageMakerWideRuled",
    type: 17,
    title: "Wide Ruled Page",
  },
  PageMakerComics: { class: "PageMakerComics", type: 18, title: "Comics Page" },

  PageWeeklyPlanner1: {
    class: "PageWeeklyPlanner1",
    type: 19,
    title: "Weekly Planner 1",
  },
  PageWeeklyPlanner2: {
    class: "PageWeeklyPlanner2",
    type: 20,
    title: "Weekly Planner 2",
  },
  PageWeeklyPlanner3: {
    class: "PageWeeklyPlanner3",
    type: 21,
    title: "Weekly Planner 3",
  },
  PageWeeklyPlanner4: {
    class: "PageWeeklyPlanner4",
    type: 22,
    title: "Weekly Planner 4",
  },
  PageWeeklyPlanner5: {
    class: "PageWeeklyPlanner5",
    type: 23,
    title: "Weekly Planner 5",
  },
  PageWeeklyPlanner6: {
    class: "PageWeeklyPlanner6",
    type: 24,
    title: "Weekly Planner 6",
  },
  PageWeeklyPlanner7: {
    class: "PageWeeklyPlanner7",
    type: 25,
    title: "Weekly Planner 7",
  },
  PageMonthlyPlanner1: {
    class: "PageMonthlyPlanner1",
    type: 26,
    title: "Monthly Planner 1",
  },
  PageMonthlyPlanner2: {
    class: "PageMonthlyPlanner2",
    type: 27,
    title: "Monthly Planner 2",
  },
  PageMonthlyPlanner3: {
    class: "PageMonthlyPlanner3",
    type: 28,
    title: "Monthly Planner 3",
  },
  PageDailyPlanner1: {
    class: "PageDailyPlanner1",
    type: 29,
    title: "Daily Planner 1",
  },
  PageDailyPlanner2: {
    class: "PageDailyPlanner2",
    type: 30,
    title: "Daily Planner 2",
  },
  PageDailyPlanner3: {
    class: "PageDailyPlanner3",
    type: 31,
    title: "Daily Planner 3",
  },
  PageDailyPlanner4: {
    class: "PageDailyPlanner4",
    type: 32,
    title: "Daily Planner 4",
  },
  PageDailyPlanner5: {
    class: "PageDailyPlanner5",
    type: 33,
    title: "Daily Planner 5",
  },
  PageDailyPlanner6: {
    class: "PageDailyPlanner6",
    type: 34,
    title: "Daily Planner 6",
  },
  PageYearlyPlanner1: {
    class: "PageYearlyPlanner1",
    type: 35,
    title: "Yearly Planner 1",
  },
  PageYearlyPlanner2: {
    class: "PageYearlyPlanner2",
    type: 36,
    title: "Yearly Planner 2",
  },
  PageDailyBudget1: {
    class: "PageDailyBudget1",
    type: 37,
    title: "Daily Budget 1",
  },
  PageDailyBudget2: {
    class: "PageDailyBudget2",
    type: 38,
    title: "Daily Budget 2",
  },
  PageMonthlyBudget1: {
    class: "PageMonthlyBudget1",
    type: 39,
    title: "Monthly Budget 1",
  },
  PageMonthlyBudget2: {
    class: "PageMonthlyBudget2",
    type: 40,
    title: "Monthly Budget 2",
  },
  PageMonthlyBudget3: {
    class: "PageMonthlyBudget3",
    type: 41,
    title: "Monthly Budget 3",
  },
  PageNotes1: { class: "PageNotes1", type: 42, title: "Notes 1" },
  PageNotes2: { class: "PageNotes2", type: 43, title: "Notes 2" },
  PasswordLog1: { class: "PasswordLog1", type: 44, title: "Password Log 1" },
  PasswordLog2: { class: "PasswordLog2", type: 45, title: "Password Log 2" },
  PageToDo1: { class: "PageToDo1", type: 46, title: "To Do 1" },
  PageToDo2: { class: "PageToDo2", type: 47, title: "To Do 2" },
  PageToDo3: { class: "PageToDo3", type: 48, title: "To Do 3" },
  PageAddressCard: {
    class: "PageAddressCard",
    type: 49,
    title: "Address Card",
  },
  PageCalendar1: { class: "PageCalendar1", type: 50, title: "Calendar 1" },
  PageCalendar2: { class: "PageCalendar2", type: 51, title: "Calendar 2" },
  PageCalendar3: { class: "PageCalendar3", type: 52, title: "Calendar 3" },
  PageCalendar4: { class: "PageCalendar4", type: 53, title: "Calendar 4" },
};

export { loadBoardData, LayoutListType };
