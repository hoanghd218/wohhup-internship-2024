using Autodesk.Revit.Attributes;
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
    public class PickWallCmd : ExternalCommand
    {
        public override void Execute()
        {          
            try
            {
                var reference = UiDocument.Selection.PickObject(ObjectType.Element, new WallIselection(), "Ban hay chon tuong");
                var ele = Document.GetElement(reference);
                MessageBox.Show(ele.Name);
            }
            catch(OperationCanceledException e)
            {
                MessageBox.Show("Ban da huy doi tuong","Warning",MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }
    }
    public class WallIselection : ISelectionFilter
    {
        public bool AllowElement(Element element)
        {

            if (element?.Category?.BuiltInCategory == BuiltInCategory.OST_Walls)
            {
                return true;
            }
            return false;
        }

        public bool AllowReference(Reference refer, XYZ point)
        {
            return false;
        }
    }
    public class ColumnIselection : ISelectionFilter
    {
        public bool AllowElement(Element element)
        {
            if (element?.Category?.BuiltInCategory == BuiltInCategory.OST_Columns)
            {
                return true;
            }
            return false;
        }

        public bool AllowReference(Reference refer, XYZ point)
        {
            return false;
        }
    }
}