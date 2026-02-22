

function QueueDisplay({queue , onUpdateStatus , onRemove}) {

    const getStatusColor = (status) => {
        switch (status){
            case 'waiting' : return "var(--warning)";
            case 'serving' : return "var(--success)";
            case 'completed' : return "var(--info)";
            default : return "var(--text)";
        }
    }
  return (
    <div>QueueDisplay</div>
  )
}

export default QueueDisplay