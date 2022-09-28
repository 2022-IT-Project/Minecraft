import {
    Bootstrapper as BaseBootstrapper,
    Physics2DLoader,
    SceneBuilder
} from "the-world-engine";

export class Bootstrapper extends BaseBootstrapper {
    public run(): SceneBuilder {
        this.setting.physics.loader(Physics2DLoader);

        return this.sceneBuilder;
    }
}
