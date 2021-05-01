class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.005
        }
        this.chain = Constraint.create(options);        
        World.add(world,this.chain);
    }
    display(){
        
        if(this.chain.bodyA != null)
        {
            var pa = this.chain.bodyA.position;
            var pb = this.chain.pointB;
            push();
            stroke("#311708")
            line(pb.x,pb.y,pa.x,pa.y);
           

        
            pop();
        }
    
        
    }
    release(){
        this.chain.bodyA = null;
    }
    attach(bodyA){
        this.chain.bodyA = bodyA
    }
}