import usePlayerStore from "../zustand/usePlayerStore";

export default function Stats() {
    const { playerData } = usePlayerStore();
    return (<>
        <table className="stats">
            <tbody>
                <tr>
                    <td>총인원수 :</td>
                    <td>{playerData.length}명</td>
                </tr>
                <tr>
                    <td>점수 합계 :</td>
                    <td>{playerData.reduce((prev, curr) => prev + curr.score, 0)}점</td>
                </tr>
            </tbody>
        </table>
    </>);
}