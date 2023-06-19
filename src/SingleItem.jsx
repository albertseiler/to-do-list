

const SingleItem = ({ item, deleteItem }) => {


    return (
        <div className="single-item">
            <p>{item.name}</p>
            <button onClick={() => deleteItem(item.id)} className="delete-btn">&#10005;</button>
        </div>
    )

}
export default SingleItem