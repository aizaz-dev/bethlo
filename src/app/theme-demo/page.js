import ThemeSelector1 from "../_component/ThemeSelectors/ThemeSelector1";
import ThemeSelector2 from "../_component/ThemeSelectors/ThemeSelector2";
import ThemeSelector3 from "../_component/ThemeSelectors/ThemeSelector3";
import ThemeSelector4 from "../_component/ThemeSelectors/ThemeSelector4";
import ThemeSelector5 from "../_component/ThemeSelectors/ThemeSelector5";

export default function ThemeDemo() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Theme Selector Showcase</h1>
          <p className="text-xl text-text-secondary">
            Choose your favorite theme selector design
          </p>
        </div>

        <div className="space-y-12">
          {/* Theme Selector 1 */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Design 1: Circular Icons</h2>
              <p className="text-text-secondary">Smooth animations with circular icon buttons</p>
            </div>
            <div className="flex justify-center">
              <ThemeSelector1 />
            </div>
          </div>

          {/* Theme Selector 2 */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Design 2: Color Palette Cards</h2>
              <p className="text-text-secondary">Visual color previews with card layout</p>
            </div>
            <div className="flex justify-center">
              <ThemeSelector2 />
            </div>
          </div>

          {/* Theme Selector 3 */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Design 3: Sliding Toggle</h2>
              <p className="text-text-secondary">Smooth sliding indicator with gradient backgrounds</p>
            </div>
            <div className="flex justify-center">
              <ThemeSelector3 />
            </div>
          </div>

          {/* Theme Selector 4 */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Design 4: Elegant Dropdown</h2>
              <p className="text-text-secondary">Dropdown with live color previews</p>
            </div>
            <div className="flex justify-center">
              <ThemeSelector4 />
            </div>
          </div>

          {/* Theme Selector 5 */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Design 5: Interactive Cards</h2>
              <p className="text-text-secondary">Gradient cards with hover effects and icons</p>
            </div>
            <div className="flex justify-center">
              <ThemeSelector5 />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-16 text-center bg-bg-card p-8 rounded-2xl border border-border-secondary">
          <h3 className="text-xl font-semibold mb-4">How to Test</h3>
          <div className="space-y-2 text-text-secondary">
            <p>• Click on any theme selector to change the theme</p>
            <p>• Notice how all selectors update simultaneously</p>
            <p>• Try different themes to see the color changes</p>
            <p>• Each design offers a unique user experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

