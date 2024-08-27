import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState();
    const [adminDetails, setAdminDetails] = useState(null);
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            auth.onAuthStateChanged(async(admin) => {
                const docRef = doc(db,"Admin",admin.uid);
                const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                console.log(docSnap.data());
                setAdminDetails(docSnap.data())
                navigate('/post-selection')
                console.log('logged succesfully');
            }else{
                setError('InValid Credentials!')
                console.error('user is not logged in')
            }       
           })
        }catch(error){
        console.log(error.message);
    }};
   
    return ( 
        <div className="min-h-screen flex flex-col justify-center bg-gray-100 sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="bg-white shadow w-full rounded-lg ">
                 <h1 className="text-center text-2xl font-bold pt-4">Login</h1>
                    <form className="px-5 py-7" onSubmit={handleSubmit}>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Email:</label>
                        <input type="email"
                            placeholder="Enter email..."
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring focus:border-blue-500" required />
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password:</label>
                        <input 
                            type="password"
                            value={password}
                            placeholder="Enter password..."
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded-lg w-full text-sm px-3 py-2 mt-1 mb-5 focus:outline-none focus:ring focus:border-blue-500"  />
                            <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white w-full py-2.5 rounded-lg text-sm font-semibold inline-block">Submit</button>
                    </form> 
                </div>
            </div>
        </div>
     );
}
 
export default AdminLogin;