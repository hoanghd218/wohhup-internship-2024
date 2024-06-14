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
    public class PickObjectsCmd : ExternalCommand
    {
        public override void Execute()
        {          
            try
            {
                var references = UiDocument.Selection.PickObjects(ObjectType.Element, new WallIselection());
                var eles = references.Select(x=> Document.GetElement(x)).ToList();

                var TotalLengthInmm = eles.Sum(x=>x.LookupParameter("Length").AsDouble()*308.4);
                MessageBox.Show(string.Join(",", eles.Select(x => x.Id.ToString())));
                MessageBox.Show($"Tong chieu dai la:{TotalLengthInmm}");
            }
            catch(OperationCanceledException e)
            {
                TaskDialog.Show("Ban da huy doi tuong","Warning");
            }
        }
    }

}