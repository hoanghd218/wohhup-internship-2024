using Autodesk.Revit.Attributes;
using Autodesk.Revit.UI;
using Autodesk.Revit.UI.Selection;
using Nice3point.Revit.Toolkit.External;
using RevitAddIn3.ViewModels;
using RevitAddIn3.Views;
using System.Windows;

namespace RevitAddIn3.Commands
{
    /// <summary>
    ///     External command entry point invoked from the Revit interface
    /// </summary>
    [UsedImplicitly]
    [Transaction(TransactionMode.Manual)]
    public class PickObjectCmd : ExternalCommand
    {
        public override void Execute()
        {          
            try
            {
                var reference = UiDocument.Selection.PickObject(ObjectType.Element);
                var ele = Document.GetElement(reference);
                TaskDialog.Show("ggg", ele.Name);
            }
            catch(OperationCanceledException e)
            {
                TaskDialog.Show("Ban da huy doi tuong","Warning");
            }
        }
    }
}