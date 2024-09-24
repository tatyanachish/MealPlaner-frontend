import axios from 'axios';


const getAllMeals = (setMeal) => {
axios.get('http://localhost:7000')
.then(({data}) => { 
    console.log(data)
    setMeal(data)
})

}

const addMeal = (title,setTitle,setMeal) => {
    axios.post('http://localhost:7000/saveMeals', {title})
    .then((data) => {
        console.log(data);
        setTitle('');
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId,title,setTitle,setMeal,setEditing) =>
    axios.put('http://localhost:7000/editMeal', {_id:mealId, title})
    .then((data) => {
        console.log(data);
        setTitle('');
        setEditing(false);
        getAllMeals(setMeal)
    })

    const deleteMeal = (_id,setMeal) => {
        axios.post('http://localhost:7000/deleteMeal', {_id})
        .then((data) => {
            console.log(data)
            getAllMeals(setMeal)
        })  
    }
export { getAllMeals,addMeal,editMeal,deleteMeal};