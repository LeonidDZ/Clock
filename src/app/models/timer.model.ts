export class TimerModel{
    public seconds: number;
    public minutes: number;
    public hours: number;

    constructor(){
        let d = new Date();
        this.seconds = d.getSeconds();
        this.minutes = d.getMinutes();
        this.hours = d.getHours();
    }
}