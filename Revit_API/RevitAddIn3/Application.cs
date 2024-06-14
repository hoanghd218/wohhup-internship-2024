using Nice3point.Revit.Toolkit.External;
using RevitAddIn3.Commands;

namespace RevitAddIn3
{
    /// <summary>
    ///     Application entry point
    /// </summary>
    [UsedImplicitly]
    public class Application : ExternalApplication
    {
        public override void OnStartup()
        {
            CreateRibbon();
        }

        private void CreateRibbon()
        {
            var panel = Application.CreatePanel("Commands", "RevitAddIn3");

            panel.AddPushButton<StartupCommand>("Execute")
                .SetImage("/RevitAddIn3;component/Resources/Icons/RibbonIcon16.png")
                .SetLargeImage("/RevitAddIn3;component/Resources/Icons/RibbonIcon32.png");
        }
    }
}