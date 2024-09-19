
import { MdEdit, MdDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMeal}) =>{
    return(
        <div>
            <p>{text}</p>
            <MdEdit onClick={updatingInInput}/>
            <MdDelete onClick={deleteMeal} />
        </div>
    )
}