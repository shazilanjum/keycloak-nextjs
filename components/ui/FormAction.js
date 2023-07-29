export default function FormAction({
    handleSubmit,
    handleSubmitWithKeycloak,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <>
                <button
                    type={action}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onClick={handleSubmit}
                >

                    {text}
                </button>
                <button
                    type={action}
                    className="group relative w-full flex justify-center py-5 px-4 border border-transparent text-m font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onClick={handleSubmitWithKeycloak}
                >

                    {text} with Keycloak
                </button>
           
            </>
            :
            <></>
        }
        </>
    )
}