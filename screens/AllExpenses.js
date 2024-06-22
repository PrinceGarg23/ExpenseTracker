import { useContext } from "react";

import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    return <ExpenseOutput expenses={expensesCtx.expenses} expensesPeriod='Total' fallbackText="No registered expenses found!!"/>
}

export default AllExpenses;