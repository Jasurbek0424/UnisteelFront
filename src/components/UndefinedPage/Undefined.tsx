
const Undefined = () => {
    return (
        <>
            <div className='bg-partner bg-cover bg-no-repeat bg-center h-screen relative after:content-[""]
            after:absolute w-full bg-black text-white'>
                <div className="container flex flex-col justify-center items-center h-full">
                    <h1 className=" text-center font-libre800 font-extrabold text-xl sm:text-2xl lg:text-4xl
                mb-5 -space-x-0.5">
                        404 <br />
                        Упс.. <br />
                        Страница не найдена :(
                    </h1>
                    <a href="/" className="py-1 px-4 border rounded-full">
                        Вернуться на гравную
                    </a>
                </div>
            </div>
        </>
    );
};

export default Undefined;
