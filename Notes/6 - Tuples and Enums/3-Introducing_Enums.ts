// Enums are also unique to TypeScript and do not exist in JavaScript
// We’ll dive more into when and if Enums should even be used, as well as the debates around their use, but for now, we’re just looking at the basic sytnax. 
// Enums allow us to define a set of named constants. We can give these constants numeric or string values. 
// Any time that we’re working in our code with a set of values that we’re referencing again, again, and again - we can use an Enum to help with this. 

//Numeric Enums
enum Responses {
  no, //1
  yes, //2
  maybe, //3
}

enum Responses1 {
  no = 2, //2
  yes, //2
  maybe, //3
}

enum Responses2 {
  no = 2, //2
  yes = 10, //10
  maybe = 24, //24
}

//String enums

enum StrResponses {
  no = "No",
  yes = "Yes",
  maybe = "Maybe",
}

//Heterogeneous Enums 
enum HetResponses {
  no = 0,
  yes = 1,
  maybe = "Maybe"
}

// Using a potential real-world example, an order status, we can see how we could potentially create an Enum so that we can allow only the statuses we specify in the enum. In this case “PENDING”, “SHIPPED”, “DELIVERED”, & “RETURNED”

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

//note that behind the scenes, TS has assigned each of these a number, 
//Pending = 0, Shipped = 1, Delivered = 2, Returned = 3.
//We can see these if we hover over the values. 

const myStatus = OrderStatus.DELIVERED;
//TS would not read this as 2, but rather of type - DELIVERED, hover to see

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)
//false
isDelivered(OrderStatus.PENDING)
//false
isDelivered(OrderStatus.DELIVERED)
//true

