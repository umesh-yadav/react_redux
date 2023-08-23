import {useAddAccountMutation, useGetAccountsQuery, useDeleteAccountMutation, useGetBonusQuery, useUpdateAccountMutation} from '../API/adminSlice';

const Admin = () =>{
    const { data, error, isLoading, isSuccess} = useGetAccountsQuery();
    // const {data, error, isLoading} = useGetBonusQuery();
    const [addAccount] = useAddAccountMutation();
    const [deleteAccount] = useDeleteAccountMutation();
    const [updateAccount] = useUpdateAccountMutation();
    return (
        <div>
            <h3>Admin Component</h3>
            {isLoading ? <p>Loading...</p> : null}
            {isSuccess &&
             data.map(account =>(
                <p key={account.id}>{account.id} : {account.amount}
                <button onClick={()=>deleteAccount(account.id)}>Delete Account</button>
                <button onClick={()=>updateAccount({id:account.id,amount:777})}>Update Account</button>
                </p>
            ))
            }
            <button onClick={()=>addAccount(500,data.length+1)}>Add Account</button>
        </div>
    )
}
export default Admin;