import { Text, View } from "react-native"

export default EachReport = ({ dataToSend }) => {
    return (
        <View>
            <Text>{dataToSend.Issue_No}</Text>
            <Text>{dataToSend.Line}</Text>
            <Text>{dataToSend.Station}</Text>
            <Text>{dataToSend.Issue}</Text>
            <Text>{dataToSend.ProblemStatement}</Text>
            <Text>{dataToSend.Downtime_min}</Text>
            <Text>{dataToSend.ResolvingDuration_Mins}</Text>
            <Text>{dataToSend.AcknowledgeDuration_Mins}</Text>
            <Text>{dataToSend.StartedBy}</Text>
            <Text>{dataToSend.StartedAt}</Text>
            <Text>{dataToSend.EndedAt}</Text>
            <Text>{dataToSend.ResolvedBy}</Text>
            <Text>{dataToSend.CounterMeasure}</Text>
            <Text>{dataToSend.CorrectiveAction}</Text>
            <Text>{dataToSend.AcknowledgedAt}</Text>
            <Text>{dataToSend.ActionTaken}</Text>
            <Text>{dataToSend.AssignedTo}</Text>
            <Text>{dataToSend.StartedDate}</Text>
            <Text>{dataToSend.StartedTime}</Text>
            <Text>{dataToSend.EndedDate}</Text>
            <Text>{dataToSend.EndedTime}</Text>
            <Text>{dataToSend.AckDate}</Text>
            <Text>{dataToSend.AckTime}</Text>
            <Text>{dataToSend.PlantName}</Text>
        </View>
    )
}