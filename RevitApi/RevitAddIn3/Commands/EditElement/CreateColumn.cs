using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB.DirectContext3D;
using Autodesk.Revit.UI;
using Autodesk.Revit.UI.Selection;
using Nice3point.Revit.Toolkit.External;
using RevitAddIn3.ViewModels;
using RevitAddIn3.Views;
using System.Windows;
using Autodesk.Revit.DB;
using System.Windows.Controls.Primitives;

namespace RevitAddIn3.Commands
{
    /// <summary>
    ///     External command entry point invoked from the Revit interface
    /// </summary>
    [UsedImplicitly]
    [Transaction(TransactionMode.Manual)]
    public class CreateColumn : ExternalCommand
    {
        public override void Execute()
        {
           var p1 = UiDocument.Selection.PickPoint("P1");
           var columnType = new FilteredElementCollector(Document).OfClass(typeof(FamilySymbol))
                .OfCategory(BuiltInCategory.OST_StructuralColumns)
                .FirstOrDefault(x=>x.Name=="") as FamilySymbol;
            var level0 = ActiveView.GenLevel;
            var level1 = new FilteredElementCollector(Document).OfClass(typeof(Level)).FirstOrDefault(x=>x.Name=="Level1");
            using( var tx= new Transaction(Document,"Move"))
            {
                tx.Start();
                FamilyInstance instance = Document.Create.NewFamilyInstance(p1, columnType, level0, Autodesk.Revit.DB.Structure.StructuralType.Column);
                instance.get_Parameter(BuiltInParameter.FAMILY_TOP_LEVEL_PARAM).Set(level1.Id);
                instance.get_Parameter(BuiltInParameter.FAMILY_TOP_LEVEL_OFFSET_PARAM).Set(0.0);
                instance.get_Parameter(BuiltInParameter.FAMILY_BASE_LEVEL_OFFSET_PARAM).Set(0.01.FromMeters());
                tx.Commit();
            }           
        }
    }

}