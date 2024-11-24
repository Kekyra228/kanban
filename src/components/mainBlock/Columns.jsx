import Cards from "./Cards";
import { ColumnMain, ColumnTitle } from "./Columns.styled";

								

function Columns({status, cardList}) {

    return (
		<ColumnMain>
			<ColumnTitle>
			<p>{status}</p>
			</ColumnTitle>
			{cardList.map((task)=> <Cards key={task._id}{...task}/>)}
		</ColumnMain>					

    )
}
export default Columns

