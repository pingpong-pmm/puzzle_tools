/* eslint-disable react/jsx-no-undef */
import { Rullerq, Rullerc } from "../games/ruller/main.js";

export const data = {
    code: "007",
    version: "0.0.1",
    state: {
        // cellShape: "square",
    },

    form: [
        {
            title: "Configurations",
            template: [
           
            ],
        },
    ],

    create: async (state: any) => {

        let sk = new Rullerc()
        let b_data = sk.makeData()

        let link = localStorage.getItem("ch_img")
        let board_image = link
        let solution_image = link;

        // let board_image = '/images/girl.jpg'
        // let solution_image = '/images/girl2.jpg';

        let board = {
            boardData: b_data,
            width: state.width,
            height: state.height,
            chada_data: board_image,
            path: [],
        };
        let solution = {
            boardData: b_data,
            width: state.width,
            height: state.height,
            chada_data: solution_image,
            path: [],
        };

        return { board, solution }
    },

    viewerView: (data: any) => {
        let ruller_data = data.board.board.boardData;
        // let link = localStorage.getItem("th_img")


        let sB =
            data.showBoard === undefined || data.showBoard === true
                ? true
                : data.showBoard;

        return sB ? (
            <Rullerq show={!!false} jinis={ruller_data} />
        ) : (
            <Rullerq show={!!true} jinis={ruller_data} />
        )
    },
    downloaderView: (data: any) => {
        let ruller_data = data.board.boardData
        let sB =
            data.showBoard === undefined || data.showBoard === true
                ? true
                : data.showBoard;

        return sB ? (
            <Rullerq show={!!true} jinis={ruller_data} />
        ) : (
            <Rullerq show={!!false} jinis={ruller_data} />
        )
    },
};
