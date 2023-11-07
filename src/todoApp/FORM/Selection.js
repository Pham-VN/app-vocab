
export default function StatusTodoList({selectedStatus,setSelectStatus}) {

    return (
        <select name="selectedStatus" value={selectedStatus} onChange={setSelectStatus}>
            <option value="notStarted">Not started</option>
            <option value="started">Started</option>
            <option value="inprogresse">In Progresse</option>
            <option value="finished">Finished</option>
        </select>
    )
}
