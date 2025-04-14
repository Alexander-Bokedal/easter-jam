

const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center self-center justify-self-center w-full h-full p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
      <p> Loading Eggs from database </p>
    </div>

  )
}


export default Loading
