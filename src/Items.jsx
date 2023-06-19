import SingleItem from './SingleItem'

const Items = ({ items, deleteItem }) => {
    return (
        <div className='items-container'>
            {items.map((item) => {
                return <SingleItem key={item.id} item={item} deleteItem={deleteItem} />
            })}
        </div>
    )
}
export default Items