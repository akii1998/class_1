


const useContextAkk = (ref) => {
  return (
    <div>
        <ref.Consumer>
            {(val)=>{
                return(
                <h3>my name is {val}</h3>
                )
            }}
        </ref.Consumer>
    </div>
  )
}
export default useContextAkk