import { useDrop } from 'react-dnd'
import { get } from 'react-hook-form'

const style = {
  height: '8rem',
  width: '8rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Dustbin = (props) => {
  const [{ canDrop, isOver, getItem }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => props.deleteImage(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getItem: monitor.getItem()
    }),
  }))

  // console.log(getItem);

  const isActive = canDrop && isOver
  let backgroundColor = 'red'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      {isActive ? 'Release to delete' : 'Delete Tile'}
    </div>
  )
}