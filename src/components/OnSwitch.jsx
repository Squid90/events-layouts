export const OnSwitch = ({setViewType, name}) => {
    return (
      <span className="material-icons" onClick={() => setViewType('list')}>{name}</span>
    )
}