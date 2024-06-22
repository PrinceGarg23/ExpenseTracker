import { StyleSheet, View } from "react-native";

import ExpenseSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {id: 'e1', description: 'Toilet Paper', amount: 94.12, date: new Date('2024-06-21')},
    {id: 'e2', description: 'New TV', amount: 799.49, date: new Date('2024-05-05')},
    {id: 'e3', description: 'Car Insurance', amount: 294.67, date: new Date('2024-06-20')},
    {id: 'e4', description: 'New Desk (Wooden)', amount: 450, date: new Date('2024-05-05')},
    {id: 'e5', description: 'New TV', amount: 799.49, date: new Date('2024-05-05')},
    {id: 'e6', description: 'Car Insurance', amount: 294.67, date: new Date('2024-06-20')},
    {id: 'e7', description: 'New Desk (Wooden)', amount: 450, date: new Date('2024-05-05')},
    {id: 'e8', description: 'New TV', amount: 799.49, date: new Date('2024-05-05')},
    {id: 'e9', description: 'Car Insurance', amount: 294.67, date: new Date('2024-06-20')},
    {id: 'e10', description: 'New Desk (Wooden)', amount: 450, date: new Date('2024-05-05')},
];

function ExpenseOutput({expenses, expensesPeriod}){
    return <View style={styles.container}>
        <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
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
    }
}); 