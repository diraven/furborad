import React, {Dispatch} from 'react';
import Cases, {ICases} from "./Case/Cases";

// function getFreeCaseNumber(cases: ICase[]): number {
//     return cases.reduce((max: number, theCase: ICase) => {
//         if (max < theCase.case_number) {
//             return theCase.case_number
//         }
//         return max
//     }, 100) + 1;
// }

interface IDashboardProps {
    dispatch: Dispatch<any>
    cases: ICases
}

export default function Dashboard(props: IDashboardProps) {
    const {dispatch, cases} = props
    return (
        <Cases dispatch={dispatch} cases={cases}/>
    );
}
