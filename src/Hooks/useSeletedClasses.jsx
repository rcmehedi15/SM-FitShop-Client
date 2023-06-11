import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './UseAuth';

const useSeletedClasses = (email) => {
    const { user,loading } = useAuth();
    
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            
            return res.data;
        },
      
    })
    return [cart, refetch]

}
export default useSeletedClasses;