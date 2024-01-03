import request, { gql } from "@/node_modules/graphql-request/build/esm/index"
const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clpz8etv6nrpy01us97286c4a/master";
export const getCarsList = async()=>{
    const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }
    
    `
    const result = await request(MASTER_URL, query)
    return result;
}
export const getStoreLocations = async()=>{
  const query = gql`
  query storeLocation{
  storesLocations {
    address
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export const createBooking = async(formValue:any)=>{
  const mutationQuery = gql`
  mutation MyMutation {
    createBooking(
      data: {userName: "`+formValue.userName+`", 
        pickUpDate: "`+formValue.pickUpDate+`",
        dropOffDate: "`+formValue.dropOffDate+`", 
        pickUpTime: "`+formValue.pickUpTime+`",
        dropOffTime: "`+formValue.dropOffTime+`", 
        contactNumber:"`+formValue.contactNumber+`",
        carId: {connect:
          {id: "clq0scen4ewk00bk9iw3g28cu"}}}
    ) {
      id
    }
  }
  
  
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}