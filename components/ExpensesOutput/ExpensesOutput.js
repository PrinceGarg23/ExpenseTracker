import { StyleSheet, Text, View } from "react-native";

import ExpenseSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


function ExpenseOutput({expenses, expensesPeriod, fallbackText}){
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses}/>;
    }

    return <View style={styles.container}>
        <ExpenseSummary expenses={expenses} periodName={expensesPeriod}/>
        {content}
    </View>
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
}); 