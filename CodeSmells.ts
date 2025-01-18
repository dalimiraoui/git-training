// Code with intentional code smells
export class CodeSmellExample {
    // Unused variable
    private unusedVariable: string = "I am not used";
  
    // Magic numbers
    private calculateArea(width: number, height: number): number {
      return width * height * 42; // 42 is a magic number
    }
  
    // Function with nested functions
    public complexFunction(): void {
      console.log("Starting complex function...");
  
      function nestedFunction() {
        console.log("Inside nested function");
        function deeplyNestedFunction() {
          console.log("Inside deeply nested function");
        }
        deeplyNestedFunction();
      }
  
      nestedFunction();
    }
  
    // Hardcoded strings
    public greetUser(username: string): string {
      return "Hello, " + username + "! Welcome back!";
    }
  
    // Code duplication
    public duplicateCodeExample(): void {
      console.log("This is a duplicate code example.");
      console.log("This is a duplicate code example.");
    }
  }
  
  // Unused function
  function unusedFunction(): void {
    console.log("I am an unused function");
  }
  
  // Example usage
  const example = new CodeSmellExample();
  example.greetUser("John Doe");
  example.duplicateCodeExample();
  