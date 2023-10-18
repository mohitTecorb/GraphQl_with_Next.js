import { GET_DATA } from '@/app/lib/queries';
import { useQuery } from '@apollo/client';
import { client } from '@/app/lib/apolloClient';
const MyComponent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_DATA, {
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Render your component using data here
  console.log("data",data);
  
};

export default MyComponent;
