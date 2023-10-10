interface Animal {
    eat(): void;
    sleep(): void;
    fly():void;
}



class Eagle implements Animal {
    public eat(): void {}
    public sleep(): void {}
    public fly(): void {}
}

class Parrot implements Animal {
    public eat(): void {}
    public sleep(): void {}
    public fly(): void {}
}

class Lion implements Animal {
    public eat(): void {}
    public sleep(): void {}
    public fly(): void {
        throw new Error("Este animal no vuela");
    }
}





