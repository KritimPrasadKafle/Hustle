package main

import "fmt"

const LoginToken string = "ghabbhhjd"

func main() {
	var username string = "Kritim"
	fmt.Println(username)
	fmt.Printf("variable is of type: %T\n", username);

	var isLoggedIn bool = true
	fmt.Println(isLoggedIn)
	fmt.Printf("variable is of type: %T\n", isLoggedIn);

	var smallVal uint8 = 255
	fmt.Println(smallVal)
	fmt.Printf("Variable is of type: %T \n", smallVal);

	var smallFloat float32 = 255
	fmt.Println(smallFloat)
	fmt.Printf("Variable is of type: %T \n", smallFloat);

	var anotherVariable int
	fmt.Println(anotherVariable)
	fmt.Printf("Vaariable is of type: %T \n", anotherVariable)

	// implicit type
	var website = "learncodeonline.np"
	fmt.Println(website)
	
	// no var style
	numberOfUser := 300000
	fmt.Println(numberOfUser)

	fmt.Println(LoginToken)
	fmt.Printf("Vaariable is of type: %T \n", LoginToken)

}