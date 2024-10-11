class A {
    async b(){
        console.log("calling b")
    }
    static c(){
        console.log("calling c")
    }
}

const a = new A();
a.b()
A.c()