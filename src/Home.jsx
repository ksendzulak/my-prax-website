function Home(){
    return(
        <div className="homeSection">
            <div className="leftTextBox">
                <h1>ZenSki</h1>
                <p>
                    Doprajte si zimnú dovolenku na nezabudnutie. 
                    Lyžiarske stredisko ZenSki je ideálnym miestom pre lyžiarov, 
                    snowboardistov, rodiny s deťmi a milovníkov prírody.
                </p>
            </div>
            <div className="rightFormBox">
                <form action="">
                    <h4>Chcem dostávať novinky</h4>
                    <input type="text" placeholder="Zadajte svoje meno"/>
                    <input type="email" placeholder="Zadajte emailovu adresu"/>
                    <button className="submitBtn">Odoslať</button>
                </form>
            </div>
        </div>
    )
}
export default Home