/* eslint-disable react/jsx-no-undef */
import { Chada, Chadaa } from "../games/chada/main.js";

export const data = {
    code: "005",
    version: "0.0.1",
    state: {
        c: 100,
        f: 212,
        // cellShape: "square",
    },

    form: [
        {
            title: "Configurations",
            template: [
                // {
                //   id: "c",
                //   title: "Range  °C",
                //   type: InputEnum.Select,
                //   options: [
                //     { label: "0 - 50", value: 50 },
                //     { label: "0 - 100", value: 100 },
                //     { label: "-50 - 50", value: -50 },
                //   ],
                // },
                // {
                //   id: "f",
                //   title: "Range  °F",
                //   type: InputEnum.Select,
                //   options: [
                //     { label: "50 - 104", value: 50 },
                //     { label: "0 - 104", value: 0 },
                //     { label: "-30 - 80", value: -50 },
                //   ],
                // }
            ],
        },
    ],

    create: async (state: any) => {

        let th = new Chadaa()
        let b_data = th.makeData()

        let link = localStorage.getItem("th_img")
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
        let chada_data = data.board.board.boardData;
        // let link = localStorage.getItem("th_img")


        let sB =
            data.showBoard === undefined || data.showBoard === true
                ? true
                : data.showBoard;

        return sB ? (<>
            <Chada show={!!false} temps={chada_data} />
        </>
        ) : (
            <Chada show={!!true} temps={chada_data} />
        )
    },
    downloaderView: (data: any) => {
        let chada_data = data.board.boardData
        let sB =
            data.showBoard === undefined || data.showBoard === true
                ? true
                : data.showBoard;

        return sB ? (
            <Chada show={!!true} temps={chada_data} />
        ) : (
            <Chada show={!!false} temps={chada_data} />
        )
    },
};
