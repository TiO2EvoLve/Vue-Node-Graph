<script setup lang="ts">

import { NodeEditor, ClassicPreset } from "rete";
import type { GetSchemes} from "rete";


type Schemes = GetSchemes<ClassicPreset.Node, ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>>;

const editor = new NodeEditor<Schemes>();
const socket = new ClassicPreset.Socket("socket");

const nodeA = new ClassicPreset.Node("A");
nodeA.addControl("a", new ClassicPreset.InputControl("text", {}));
nodeA.addOutput("a", new ClassicPreset.Output(socket));
await editor.addNode(nodeA);

</script>

<template>
  <div ></div>
</template>