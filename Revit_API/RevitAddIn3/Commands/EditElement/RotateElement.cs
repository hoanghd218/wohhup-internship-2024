using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB.DirectContext3D;
using Autodesk.Revit.UI;
using Autodesk.Revit.UI.Selection;
using Nice3point.Revit.Toolkit.External;
using RevitAddIn3.ViewModels;
using RevitAddIn3.Views;
using System.Windows;
using Autodesk.Revit.DB;

namespace RevitAddIn3.Commands
{
    /// <summary>
    ///     External command entry point invoked from the Revit interface
    /// </summary>
    [UsedImplicitly]
    [Transaction(TransactionMode.Manual)]
    public class RotateElement : ExternalCommand
    {
        public override void Execute()
        {


            var column = UiDocument.Selection.PickObject(ObjectType.Element, new WallIselection(), "Hay chon tuong");
            var wallelement = Document.GetElement(column);
            using (var tx = new Transaction(Document, "Move"))
            {
                tx.Start();
                if (wallelement.Location is LocationPoint lc)
                {
                    XYZ Point1 = new XYZ(lc.Point.X, lc.Point.Y, 0);
                    XYZ Point2 = new XYZ(lc.Point.X, lc.Point.Y, 30);
                    Line axis = Line.CreateBound(Point1, Point2);
                    ElementTransformUtils.RotateElement(Document, wallelement.Id, axis, Math.PI / 3);
                }
                else if (wallelement.Location is LocationCurve locationCurve)
                {
            
                    // Xác định trục xoay (line) và góc xoay (radians)
                    XYZ rotationAxisStart = locationCurve.Curve.GetEndPoint(0);
                    XYZ rotationAxisEnd = locationCurve.Curve.GetEndPoint(1);
                    Line rotationAxis = Line.CreateBound(rotationAxisStart, rotationAxisEnd);
                    double rotationAngle = Math.PI / 4; // Xoay 45 độ (0.25 * 2 * PI radians)

                    // Xoay tường
                    locationCurve.Rotate(rotationAxis, rotationAngle);
                }
                tx.Commit();

            }
        }
    }

}