
const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}

const addBody = (chassisObject) => {
    chassisObject.body = "Fever"
    return chassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}

let chassis = createChassis()
// console.log(chassis)
let chassisWithBody = addBody(chassis)
// console.log(chassisWithBody)
let chassisWithWheels = addWheels(chassis)
// console.log(chassisWithWheels)
let chassisWithEngine = addEngine(chassis)
// console.log(chassisWithEngine)
let chassisWithSteeringWheel = addSteeringWheel(chassis)
// console.log(chassisWithSteeringWheel)
let chassisWithDriveTrain = addDriveTrain(chassis)
// console.log(chassisWithDriveTrain)
console.log(chassis)
