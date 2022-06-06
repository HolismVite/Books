import { List } from '@List'

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const Books = () => {
    return <List
        title='Books'
        entityType='book'
        headers={headers}
        row={row}
    />
}

export default Books